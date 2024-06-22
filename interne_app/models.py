from django.db import models

# Create your models here.
class employee_login(models.Model):
    ROLE_CHOICES = [
        (1, "Admin"),
        (2, "Employee")
    ]
    user_id = models.CharField(max_length=20,unique=True)
    password = models.CharField(max_length = 10)
    roleid = models.IntegerField(max_length=1,choices=ROLE_CHOICES, default= 2)

    def __str__(self):
        return self.user_id
    
class employee_profile(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Others'),
    ]
    user_email = models.EmailField(unique=True)
    # full_name = models.CharField(max_length=20)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    user_phone = models.CharField(max_length=10,unique=True)
    father_name = models.CharField(max_length=20)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, default='M')

class admin_profile(models.Model):
    # full_name = models.CharField(max_length=20),
    admin_email = models.EmailField(unique=True)
    admin_name = models.CharField(max_length=20)

class Gender(models.Model):
     GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Others'),
    ]
     value = models.CharField(max_length=1,choices=GENDER_CHOICES,default='M')
     
    
