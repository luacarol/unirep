from django.contrib import admin
from .models import Republic

@admin.register(Republic)
class RepublicAdmin(admin.ModelAdmin):
    list_display = ('name', 'value', 'housing_type', 'community_type')
