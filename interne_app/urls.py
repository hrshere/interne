from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("profile/<int:employee_id>/",views.profile, name="profile")
]