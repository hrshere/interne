from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("profile/<int:employee_id>/",views.profile, name="profile"),
    path("add_member/",name="add_member",view=views.add_member),
    path("member/",name="search",view=views.search)
]