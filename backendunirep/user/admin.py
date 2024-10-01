from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('age', 'gender', 'full_name', 'phone_number', 'university_course', 'preferred_housing', 'preferred_accommodation', 'smoker', 'pets_allowed', 'study_schedules', 'organization_and_cleaning', 'level_socialization', 'feeding_preferences', 'personality_test_or_predominant_traits', 'preferences_environments')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('age', 'gender', 'full_name', 'phone_number', 'university_course', 'preferred_housing', 'preferred_accommodation', 'smoker', 'pets_allowed', 'study_schedules', 'organization_and_cleaning', 'level_socialization', 'feeding_preferences', 'personality_test_or_predominant_traits', 'preferences_environments')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
