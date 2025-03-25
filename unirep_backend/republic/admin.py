from django.contrib import admin
from .models import Republic, Address, File

# Registro do modelo Address no admin
@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ('street', 'neighborhood', 'city', 'state')
    search_fields = ('street', 'city')
    ordering = ('city',)

# Registro do modelo File no admin
@admin.register(File)
class FileAdmin(admin.ModelAdmin):
    list_display = ('id', 'republic', 'file', 'uploaded_at')
    search_fields = ('file',)
    ordering = ('uploaded_at',)

# Registro do modelo Republic no admin
@admin.register(Republic)
class RepublicAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'number_of_members', 'rent', 'address')
    search_fields = ('name', 'description')
    ordering = ('id',)
