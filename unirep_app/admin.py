from django.contrib import admin
from unirep_app.models import User, Republic, PayableItem

# Register your models here.
admin.site.register(User)
admin.site.register(Republic)
admin.site.register(PayableItem)

# User Admin
# Username: Admin
# E-mail: admin@gmail.com
# Password: root