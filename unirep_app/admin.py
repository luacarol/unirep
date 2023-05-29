from django.contrib import admin
from django.contrib.auth.admin import  UserAdmin
from unirep_app.models import User, Republic, PayableItem

class UserAdmin(UserAdmin):
    list_display = ('email', 'username', 'is_admin', 'is_active', 'created_at')
    search_fields = ('email', 'username')
    readonly_fields = ('id', 'last_login')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


# Register your models here.
admin.site.register(User)
admin.site.register(Republic)
admin.site.register(PayableItem)

# User Admin
# Username: Admin
# E-mail: admin@gmail.com
# Password: root