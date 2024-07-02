from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from .forms import LoginForm, AddMemberForm
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .models import employee_login, employee_profile, admin_profile
from django.contrib import messages
from django.db import IntegrityError


def index(request):
    form = LoginForm()  # Initialize form instance

    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            user_id = form.cleaned_data['user_id']
            password = form.cleaned_data['password']
            print(user_id, password)

            # Check if a user with the given user_id exists
            user_exists = employee_login.objects.filter(user_id=user_id).exists()

            if user_exists:
                print("User exists")
                user_authenticated = employee_login.objects.filter(user_id=user_id, password=password).exists()
                if user_authenticated:
                    print('user_authentication:', user_authenticated)
                    role_id = employee_login.objects.get(user_id=user_id)
                    print("role_id", role_id.roleid)
                    
                    if role_id.roleid == 2:
                        user = employee_profile.objects.get(user_email=user_id)
                        # userprofile = get_object_or_404(employee_profile, user_email=user_id)
                        # return render(request, "interne_app/employee/profile.html", context={"userprofile": userprofile})
                        # return profile(request=request,employee_id=user_id)
                        return redirect("profile",employee_id=user.pk)
                    else:
                        # adminprofile = get_object_or_404(admin_profile, admin_email=user_id)
                        return HttpResponseRedirect(reverse("member"))
                else:
                    form.add_error('password', 'Incorrect password')
            else:
                form.add_error('user_id', 'User does not exist')
    
    # If GET request or invalid form submission, render login page with form
    return render(request, 'interne_app/login.html', {'form': form})


def profile(request, employee_id):
    userprofile = get_object_or_404(employee_profile,id=employee_id)
    my_template = loader.get_template("interne_app/employee/profile.html")
    context = {
        "userprofile": userprofile
    }
    return HttpResponse(my_template.render(context, request))

def add_member(request):
    if request.method == 'POST':
        print("Received POST request with data:", request.POST)
        form = AddMemberForm(request.POST)
        if form.is_valid():
            fname = form.cleaned_data['fname']
            lname = form.cleaned_data['lname']
            father_name = form.cleaned_data['father_name']
            email = form.cleaned_data['email']
            phone = form.cleaned_data['phone']
            print("Form is valid. Cleaned data:", form.cleaned_data)

            try:
                member = employee_profile(
                    father_name=father_name,
                    user_email=email,
                    user_phone=phone,
                    first_name=fname,
                    last_name=lname
                )
                member.save()
                print("Member saved successfully:", member)

                set_details_for_login = employee_login(user_id=email, password="@1Q2w3e4r")
                set_details_for_login.save()
                print("Login details saved successfully for:", email)

                messages.success(request, 'Member added successfully!')
                return HttpResponseRedirect(reverse("member"))
            except IntegrityError as e:
                print("IntegrityError occurred:", e)
                if email in str(e):
                    form.add_error('email', 'A member with this email already exists.')
                if phone in str(e):
                    form.add_error('phone','A member with this phone already exists')
        else:
            print("Form is invalid. Errors:", form.errors)
            messages.error(request, 'There were errors in the form.')
    else:
        print("Received GET request.")
        form = AddMemberForm()

    print("Rendering form with context.")
    return render(request, 'interne_app/admin/add_member.html', {'form': form})

    

def search(request):
    #to get query params in url, need to use get method
    if request.method == "GET":
        name = request.GET.get('name', '')
        email = request.GET.get('email', '')
        phone = request.GET.get('phone', '')
        print(email,phone,name)

        if name or email or phone:
            employee_list = employee_profile.objects.all()

            if name:
                employee_list = employee_list.filter(first_name__icontains=name)
            if email:
                employee_list = employee_list.filter(user_email__icontains=email)
            if phone:
                employee_list = employee_list.filter(user_phone__icontains=phone)

            # Redirect to the same URL with the search parameters
            return render(request, 'interne_app/admin/members.html', {'employee_list': employee_list})

        else:
            # this calls member view, can also pass param optionally
            return HttpResponseRedirect(reverse("member",))
    return HttpResponseRedirect(reverse("member",))


#todo - make a member view to be used inside search and add member and index
def member(request):
    employee_list = employee_profile.objects.all()
    
    return render(request, 'interne_app/admin/members.html', {'employee_list': employee_list})
