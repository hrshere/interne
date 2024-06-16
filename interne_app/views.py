from django.shortcuts import render, get_object_or_404

# Create your views here.
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.template import loader
from .models import employee_login, employee_profile


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
                userprofile = get_object_or_404(employee_profile,user_email=user_id)
                print(userprofile)
                return render(request, "interne_app/employee/profile.html",context={"userprofile":userprofile})
            else:
                return render(template_name='interne_app/login.html',request=request,context={"error_message":'bad_credentials'})
        else:
            print("User does not exist")
            return render(template_name='interne_app/login.html',request=request,context={"error_message":'user does not exist'})
    else:
        return render(request=request,template_name='interne_app/login.html')
    # except employee_login.DoesNotExist:
    #     raise Http404('invalid email')
    # else:
    #     try:
    #         user_with_valid_password = employee_login.objects.get('12345678')
    #     except employee_login.DoesNotExist:
    #         raise Http404('invalid password')
    #     else:
    #         user_profile = get_object_or_404(employee_profile,user_with_valid_password.user_id)
    

# def employee_login_view(request):
#     if request.method == "post":
#         form = EmployeeLoginForm(request.POST)

def profile(request, employee_id):
    userprofile = get_object_or_404(employee_profile,employee_id)
    my_template = loader.get_template("interne_app/employee/profile.html")
    context = {
        "userprofile": userprofile
    }
    return HttpResponse(my_template.render(context, request))