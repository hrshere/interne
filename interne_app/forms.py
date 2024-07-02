from django import forms
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from .models import employee_profile


class LoginForm(forms.Form):
    user_id = forms.EmailField(label='Email',max_length=30,widget=forms.EmailInput(attrs={
        'class': 'form-control form-control-sm rounded',
        'placeholder': 'UserId',
        'id': 'user_id',
        'required': True
    }))
    password = forms.CharField(widget=forms.PasswordInput(attrs={
        'class': 'form-control form-control-sm rounded',
        'placeholder': '***************',
        'id': 'password',
        'required': True
    }), label='Password', max_length=128)

class AddMemberForm(forms.Form):
    fname = forms.CharField(widget=forms.TextInput(attrs={
        'class': "form-control rounded",
        'id': 'fname',
        'required':True
        })
    )
    lname = forms.CharField(widget=forms.TextInput(attrs={
        'class': "form-control rounded",
        'id': 'lname',
        'required':True
        })
    )
    father_name = forms.CharField(widget=forms.TextInput(attrs={
        'class': "form-control rounded",
        'id': 'father_name',
        'required':True
        })
    )
    email = forms.EmailField(label='Email',max_length=30,widget=forms.EmailInput(attrs={
        'class': 'form-control rounded',
        'id': 'email',
        'required': True
    }))
    phone = forms.CharField(widget=forms.TextInput(attrs={
        'class': "form-control rounded",
        'id': 'phone',
        'required':True
        })
    )

    def clean_email(self):
        email = self.cleaned_data.get('email')
        try:
            validate_email(email)
        except ValidationError:
            raise forms.ValidationError('Invalid email format')
        if not email:
            print('error was here')
            raise forms.ValidationError('This field is required reee')
        return email
    
    def clean_phone(self):
        phone = self.cleaned_data.get('phone')
        if not phone:
            raise forms.ValidationError('Phone is a required field')
        valid_phone = employee_profile.objects.filter(user_phone=phone).exists()
        if not valid_phone:
            raise forms.ValidationError('This phone no. is already registered')
        return phone
        
        

