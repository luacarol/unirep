from rest_framework import serializers
from .models import Address, File, ItemToPay, Republic
from user.serializers import UserSerializer

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['street', 'number', 'neighborhood', 'city', 'state', 'latitude', 'longitude']


class FileSerializer(serializers.ModelSerializer):
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = File
        fields = ['id', 'file', 'file_url', 'uploaded_at']

    def get_file_url(self, obj):
        request = self.context.get('request')
        if obj.file:
            return request.build_absolute_uri(obj.file.url)
        return None

class ItemToPaySerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemToPay
        fields = ['id', 'name', 'amount', 'description']


class RepublicSerializer(serializers.ModelSerializer):
    address = AddressSerializer()
    files = FileSerializer(many=True, read_only=True, source="republic_files")
    items_to_pay = ItemToPaySerializer(many=True)
    users = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Republic
        fields = ['id', 'name', 'description', 'number_of_members', 'rent', 'address', 'files', 'items_to_pay', 'users']

    def create(self, validated_data):
        address_data = validated_data.pop('address')
        files_data = validated_data.pop('files')
        items_to_pay_data = validated_data.pop('items_to_pay')

        # Criando o Address
        address = Address.objects.create(**address_data)
        
        # Criando a Republic
        republic = Republic.objects.create(address=address, **validated_data)

        # Criando os Files
        for file_data in files_data:
            File.objects.create(republic=republic, **file_data)

        # Criando os ItemsToPay
        for item_data in items_to_pay_data:
            ItemToPay.objects.create(republic=republic, **item_data)

        return republic