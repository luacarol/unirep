from django.contrib import admin
from .models import Republic, Address, File, ItemToPay

# Registro do modelo Address no admin
@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ('street', 'number', 'neighborhood', 'city', 'state')
    search_fields = ('street', 'city')
    ordering = ('city',)

# Registro do modelo File no admin
@admin.register(File)
class FileAdmin(admin.ModelAdmin):
    list_display = ('id', 'republic', 'file', 'uploaded_at')
    search_fields = ('file',)
    ordering = ('uploaded_at',)

@admin.register(ItemToPay)
class ItemToPayAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'amount', 'republic')
    search_fields = ('name', 'republic__name')
    ordering = ('id',)

# Registro do modelo Republic no admin
@admin.register(Republic)
class RepublicAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'number_of_members', 'rent', 'address')
    search_fields = ('name', 'description')
    ordering = ('id',)

