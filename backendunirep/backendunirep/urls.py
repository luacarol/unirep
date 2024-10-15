from django.urls import path, include
from django.contrib import admin
from rest_framework_simplejwt.views import TokenObtainPairView, TokenVerifyView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/repubics/', include('republic.urls')),
    path('api/users/', include('user.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
