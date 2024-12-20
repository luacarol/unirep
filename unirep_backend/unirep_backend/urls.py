from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from republic import views

router = routers.DefaultRouter()
router.register(r'republics', views.RepublicViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]