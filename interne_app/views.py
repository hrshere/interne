from django.shortcuts import render, get_object_or_404
from django.urls import reverse

# Create your views here.
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.template import loader
from .models import employee_login, employee_profile, admin_profile


def index(request):
    if request.method == 'POST':
    # try:
        user_id = request.POST.get('user_id')
        password = request.POST.get('password')
        print(user_id,password)
    # Check if a user with the given user_id exists
        user_exists = employee_login.objects.filter(user_id=user_id).exists()

    # Print the result to the console
        if user_exists:
            print("User exists")
            user_authenticated = employee_login.objects.filter(password=password).exists()
            if user_authenticated:
                print('user_authentication:',user_authenticated)
                role_id = employee_login.objects.get(user_id=user_id)
                print("role_id",role_id.roleid)
                if(role_id.roleid == 2):
                    userprofile = get_object_or_404(employee_profile,user_email=user_id)
                    print(userprofile)
                    return render(request, "interne_app/employee/profile.html",context={"userprofile":userprofile})
                else:
                    adminprofile = get_object_or_404(admin_profile,admin_email=user_id)
                    # employee_list = employee_profile.objects.all()
                    # return render(request,"interne_app/admin/members.html",context={'adminprofile':adminprofile, 'employee_list':employee_list})
                    # return member(request)
                    return HttpResponseRedirect(reverse("member",))
            else:
                return render(template_name='interne_app/login.html',request=request,context={"error_message":'bad_credentials'})
        else:
            print("User does not exist")
            return render(template_name='interne_app/login.html',request=request,context={"error_message":'user does not exist'})
    else:
        return render(request=request,template_name='interne_app/login.html')
  

def profile(request, employee_id):
    userprofile = get_object_or_404(employee_profile,employee_id)
    my_template = loader.get_template("interne_app/employee/profile.html")
    context = {
        "userprofile": userprofile
    }
    return HttpResponse(my_template.render(context, request))

def add_member(request):
    if request.method == 'POST':
        print(request.POST.get('name'),request.POST.get('father_name'),request.POST.get('email'),request.POST.get('phone'))
        name = request.POST.get('name')
        father_name = request.POST.get('father_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        member = employee_profile(father_name=father_name,user_email= email, user_phone= phone,full_name = name)
        member.save()
        member_exists = employee_profile.objects.filter(user_email=email).exists()
        if member_exists:
            member_details = get_object_or_404(employee_profile,user_email=email)
            print(member_details.full_name,"exists now in db")
            set_details_for_login = employee_login(user_id = email, password = "@1Q2w3e4r")
            set_details_for_login.save()
            return HttpResponseRedirect(reverse("member",))
            #return render(request=request, template_name="interne_app/admin/members.html",context={"employee_list":employee_list})
            # return render(request=request,template_name='interne_app/admin/add_member.html',context={"name":member_details.full_name,"email":member_details.user_email,"phone":member_details.user_phone,"father_name":member_details.father_name})
        else:
            return render(request= request,template_name='interne_app/admin/add_member.html', context={"error_message":"details could not be submitted"})
    else:
        return render(request,'interne_app/admin/add_member.html')
    
# def search(request):
    if request.method == "POST":
        name = request.POST.get('name')
        print(name,"from frontend")
        employee_present = employee_profile.objects.filter(full_name = name).exists()
        if employee_present:
            searched_employee = employee_profile.objects.get(full_name=name)
            return render(request=request, template_name="interne_app/admin/members.html",context={"employee_list":searched_employee})

# views.py


def search(request):
    if request.method == "POST":
        name = request.POST.get('name')
        # Query all employee profiles if name is not provided
        if name:
            employee_list = employee_profile.objects.filter(full_name__icontains=name)
        else:
            # this calls member view, can also pass param optionally
            return HttpResponseRedirect(reverse("member",))

        return render(request, 'interne_app/admin/members.html', {'employee_list': employee_list})

    # For GET requests or initial page load, return an empty template or handle accordingly
    return render(request, 'interne_app/admin/members.html', {'employee_list': []})

#todo - make a member view to be used inside search and add member and index
def member(request):
    employee_list = employee_profile.objects.all()
    
    return render(request, 'interne_app/admin/members.html', {'employee_list': employee_list})
