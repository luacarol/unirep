from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('home', views.home, name='home'),
    path('edit-profile', views.edit_profile, name="edit-profile")
]
