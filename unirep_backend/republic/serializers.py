from rest_framework import serializers
from .models import Republic

class RepublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Republic
        fields = '__all__'