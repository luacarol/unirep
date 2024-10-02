from django.urls import path, include
from django.contrib import admin
from rest_framework_simplejwt.views import TokenObtainPairView, TokenVerifyView

urlpatterns = [
    path('admin/', admin.site.urls),  # Adicione esta linha
    path('api/repubics/', include('republic.urls')),
    path('api/users/', include('user.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]
