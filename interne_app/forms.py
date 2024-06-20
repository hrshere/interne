from django import forms

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