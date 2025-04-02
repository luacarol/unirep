from django.contrib import admin
from .models import User

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'age', 'phone_number', 'course', 'favorite_hobby', 'socialization')
    search_fields = ('name', 'course', 'favorite_hobby')
    ordering = ('id',)
