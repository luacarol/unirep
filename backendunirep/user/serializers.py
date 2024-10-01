from rest_framework import serializers
from .models import CustomUser

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'age', 'full_name', 'phone_number', 'gender', 'university_course', 'preferred_housing', 'preferred_accommodation', 'smoker', 'pets_allowed', 'study_schedules', 'organization_and_cleaning', 'level_socialization', 'feeding_preferences', 'personality_test_or_predominant_traits', 'preferences_environments', 'email']
