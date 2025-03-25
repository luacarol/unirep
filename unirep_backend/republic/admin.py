from django.contrib import admin
from .models import Republic

@admin.register(Republic)
class RepublicAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)
    ordering = ('id',)
