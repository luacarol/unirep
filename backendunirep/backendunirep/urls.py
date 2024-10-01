from django.urls import path, include
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),  # Adicione esta linha
    path('api/repubics/', include('republic.urls')),
    path('api/users/', include('user.urls')),
]
