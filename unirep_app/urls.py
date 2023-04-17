from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('home', views.home, name='home'),
    path('edit-profile', views.edit_profile, name="edit-profile"),
    path('see-items-pay', views.see_items_pay, name="see-items-pay"),
    path('republics', views.republics, name='republics'),
    path('republic-information', views.republic_information, name='republic-information'),
    path('create-republic', views.create_republic, name="create-republic"),
    path('edit-republic', views.edit_republic, name="edit-republic"),
]
