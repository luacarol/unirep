from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RepublicViewSet

router = DefaultRouter()
router.register(r'republics', RepublicViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

