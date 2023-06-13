import os, django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'unirep_project.settings')
django.setup()

from django.db.utils import IntegrityError
from faker import Faker
import random
from unirep_app.models import User, Republic

def creating_users(qtd_users):
    fake = Faker('pt_BR')
    Faker.seed(10)
    for _ in range(qtd_users):
        username = fake.name()
        email = fake.email()
        user_type = random.randrange(1, 3)
        
        try:
            custom_user = User(username=username, email=email, user_type=user_type)
            custom_user.save()
        except IntegrityError:
            print(f"Usuário com o e-mail '{email}' já existe. Ignorando criação.")

def creating_republics(qtd_users):
    fake = Faker('pt_BR')
    Faker.seed(10)
    for _ in range(qtd_users):
        republics_names = ['Mal Te Vi', 'Bem Te Vi', 'Os Nerds', 'Os Atrapalhados']
        name = random.choice(republics_names)
        cellphone = fake.phone_number()
        address = fake.address()
        republic = Republic(name=name, cellphone=cellphone, address=address)
        republic.save()

creating_users(10)
creating_republics(5)
