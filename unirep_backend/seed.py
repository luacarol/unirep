import os
import django
from faker import Faker
from decimal import Decimal
from django.core.files.storage import default_storage
from django.core.files import File as DjangoFile
import random

# Configurar Django para rodar standalone
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'unirep_backend.settings')
django.setup()

from republic.models import Republic, Address, ItemToPay, File
from user.models import User  # Importe o modelo User

fake = Faker('pt_BR')

DEFAULT_FILE_PATH = os.path.join('media', 'default_files', 'republic.jpg')

def create_republic():
    # Criando um endereço fictício
    address = Address.objects.create(
        street=fake.street_name(),
        number=fake.random_int(min=1, max=10),
        neighborhood=fake.city_suffix(),
        city=fake.city(),
        state=fake.state_abbr(),
        latitude=random.uniform(-90, 90),
        longitude=random.uniform(-180, 180)
    )

    # Criando a república
    number_of_members = fake.random_int(min=1, max=10)
    republic = Republic.objects.create(
        name=fake.company(),
        description=fake.text(),
        number_of_members=number_of_members,
        rent=Decimal(fake.random_int(min=500, max=3000)),
        address=address
    )

    # Criando usuários para a república
    for _ in range(number_of_members):
        user = User.objects.create(
            name=fake.name(),  # 🔄 Corrigido de full_name para name
            age=fake.random_int(min=18, max=35),
            phone_number=fake.phone_number(),
            course=fake.job(),  # 🔄 Corrigido de university_course para course
            favorite_hobby=fake.word(),
            dislikes=fake.sentence(),
            socialization=random.choice(['introvert', 'extrovert']),
            household_skills=random.choice(['yes', 'no']),
            contribution_modes=random.choice(['cleaning', 'cooking', 'organizing']),
        )
        republic.users.add(user)  # Adiciona o usuário à república

    print(f'República "{republic.name}" criada com sucesso com {number_of_members} membros!')


if __name__ == '__main__':
    create_republic()
