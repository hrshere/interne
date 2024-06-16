from django.db import models

# Create your models here.
class employee_login(models.Model):
    user_id = models.CharField(max_length=20,unique=True)
    password = models.CharField(max_length = 10)

    def __str__(self):
        return self.user_id
    
class employee_profile(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    user_email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=20)
    user_phone = models.CharField(max_length=10,unique=True)
    father_name = models.CharField(max_length=20)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='M')

    
