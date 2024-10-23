from django.core.management.base import BaseCommand
from user.models import CustomUser
from django.contrib.auth.hashers import make_password
from django.core.files.base import ContentFile
import requests

class Command(BaseCommand):
    help = 'Seeds the database with user data'

    def handle(self, *args, **kwargs):
        users_data = [
            {
                "username": "joão1",
                "password": "password123",
                "full_name": "João Silva",
                "age": 22,
                "gender": "M",
                "phone_number": "123456789",
                "university_course": "Ciências Exatas",
                "preferred_housing": "Casa",
                "preferred_accommodation": "Quarto individual",
                "smoker": False,
                "pets_allowed": True,
                "study_schedules": "Manhã",
                "organization_and_cleaning": "Muita importância",
                "level_socialization": "Gosta de interações sociais constantes",
                "feeding_preferences": "Carnívoro",
                "personality_test_or_predominant_traits": "Extrovertido",
                "preferences_environments": "Agitados",
            },
            {
                "username": "maria1",
                "password": "password123",
                "full_name": "Maria Monteiro",
                "age": 25,
                "gender": "F",
                "phone_number": "223456789",
                "university_course": "Ciências Sociais Aplicadas",
                "preferred_housing": "Apartamento",
                "preferred_accommodation": "Quarto individual",
                "smoker": False,
                "pets_allowed": True,
                "study_schedules": "Manhã",
                "organization_and_cleaning": "Muita importância",
                "level_socialization": "Gosta de interações sociais constantes",
                "feeding_preferences": "Carnívoro",
                "personality_test_or_predominant_traits": "Extrovertido",
                "preferences_environments": "Agitados",
            },
        ]

        for user_data in users_data:
            user, created = CustomUser.objects.get_or_create(
                username=user_data['username'],
                defaults={
                    'password': make_password(user_data['password']),
                    'full_name': user_data['full_name'],
                    'age': user_data['age'],
                    'gender': user_data['gender'],
                    'phone_number': user_data['phone_number'],
                    'university_course': user_data['university_course'],
                    'preferred_housing': user_data['preferred_housing'],
                    'preferred_accommodation': user_data['preferred_accommodation'],
                    'smoker': user_data['smoker'],
                    'pets_allowed': user_data['pets_allowed'],
                    'study_schedules': user_data['study_schedules'],
                    'organization_and_cleaning': user_data['organization_and_cleaning'],
                    'level_socialization': user_data['level_socialization'],
                    'feeding_preferences': user_data['feeding_preferences'],
                    'personality_test_or_predominant_traits': user_data['personality_test_or_predominant_traits'],
                    'preferences_environments': user_data['preferences_environments'],
                }
            )

            # Adiciona imagem de perfil fake
            if created:
                image_url = "https://fakeimg.pl/250x250/"  # URL para gerar imagem fake
                response = requests.get(image_url)
                if response.status_code == 200:
                    user.profile_image.save(f"{user.username}_profile_image.jpg", ContentFile(response.content))

                self.stdout.write(self.style.SUCCESS(f'User {user.username} created successfully!'))
            else:
                self.stdout.write(self.style.WARNING(f'User {user.username} already exists.'))
