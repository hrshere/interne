from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from .forms import LoginForm
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .models import employee_login, employee_profile, admin_profile


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
                    user = employee_profile.objects.get(user_email=user_id)
                    print('user_authentication:', user_authenticated)
                    role_id = employee_login.objects.get(user_id=user_id)
                    print("role_id", role_id.roleid)
                    
                    if role_id.roleid == 2:
                        # userprofile = get_object_or_404(employee_profile, user_email=user_id)
                        # return render(request, "interne_app/employee/profile.html", context={"userprofile": userprofile})
                        # return profile(request=request,employee_id=user_id)
                        return redirect("profile",employee_id=user.pk)
                    else:
                        adminprofile = get_object_or_404(admin_profile, admin_email=user_id)
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
        print(request.POST.get('name'),request.POST.get('father_name'),request.POST.get('email'),request.POST.get('phone'))
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        father_name = request.POST.get('father_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        member = employee_profile(father_name=father_name,user_email= email, user_phone= phone,first_name = fname, last_name=lname)
        member.save()
        member_exists = employee_profile.objects.filter(user_email=email).exists()
        if member_exists:
            member_details = get_object_or_404(employee_profile,user_email=email)
            print(member_details.first_name,"exists now in db")
            #correct approach ?
            set_details_for_login = employee_login(user_id = email, password = "@1Q2w3e4r")
            set_details_for_login.save()
            return HttpResponseRedirect(reverse("member",))
            #return render(request=request, template_name="interne_app/admin/members.html",context={"employee_list":employee_list})
            # return render(request=request,template_name='interne_app/admin/add_member.html',context={"name":member_details.full_name,"email":member_details.user_email,"phone":member_details.user_phone,"father_name":member_details.father_name})
        else:
            return render(request= request,template_name='interne_app/admin/add_member.html', context={"error_message":"details could not be submitted"})
    else:
        return render(request,'interne_app/admin/add_member.html')
    

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
