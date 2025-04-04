import os
import django
import requests
from faker import Faker
from decimal import Decimal
from django.core.files.storage import default_storage
from django.core.files import File as DjangoFile
import random

# Configurar Django para rodar standalone
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'unirep_backend.settings')
django.setup()

from django.conf import settings
from republic.models import Republic, Address, ItemToPay, File
from user.models import User  # Importe o modelo User

fake = Faker('pt_BR')

DEFAULT_FILE_PATH = os.path.join(settings.MEDIA_ROOT, "default_files", "republic.jpg")

def get_real_address():
    """Busca um endereço real aleatório da API ViaCEP"""
    cep = str(random.randint(1000000, 9999999)).zfill(8)  # Gera CEP aleatório
    url = f"https://viacep.com.br/ws/{cep}/json/"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        if "erro" not in data:
            return {
                "street": data.get("logradouro", fake.street_name()),
                "neighborhood": data.get("bairro", fake.city_suffix()),
                "city": data.get("localidade", fake.city()),
                "state": data.get("uf", fake.state_abbr()),
                "cep": data.get("cep", ""),
                "number": random.randint(1, 500),
                "latitude": random.uniform(-23.5, -22.8),  # Coordenadas genéricas
                "longitude": random.uniform(-46.8, -46.3),
            }
    
    # Caso o CEP seja inválido, gera um endereço fictício
    return {
        "street": fake.street_name(),
        "neighborhood": fake.city_suffix(),
        "city": fake.city(),
        "state": fake.state_abbr(),
        "cep": "",
        "number": random.randint(1, 500),
        "latitude": random.uniform(-23.5, -22.8),
        "longitude": random.uniform(-46.8, -46.3),
    }

def create_republic():
    # Obtendo um endereço real
    real_address = get_real_address()

    # Criando um endereço no banco de dados
    address = Address.objects.create(
        street=real_address["street"],
        number=real_address["number"],
        neighborhood=real_address["neighborhood"],
        city=real_address["city"],
        state=real_address["state"],
        latitude=real_address["latitude"],
        longitude=real_address["longitude"]
    )

    # Criando a república
    republic = Republic.objects.create(
        name=fake.company(),
        description=fake.text(),
        rent=Decimal(fake.random_int(min=500, max=3000)),
        address=address
    )

    # Criando usuários para a república
    number_of_members = fake.random_int(min=1, max=10)
    for _ in range(number_of_members):
        user = User.objects.create(
            name=fake.name(),
            age=fake.random_int(min=18, max=35),
            phone_number=fake.phone_number(),
            course=fake.job(),
            favorite_hobby=fake.word(),
            dislikes=fake.sentence(),
            socialization=random.choice(['introvert', 'extrovert']),
            household_skills=random.choice(['yes', 'no']),
            contribution_modes=random.choice(['cleaning', 'cooking', 'organizing']),
        )
        republic.users.add(user)  # Adiciona o usuário à república

    # Atualiza o número de membros com base nos usuários adicionados
    republic.number_of_members = republic.users.count()
    republic.save()

    # Criando itens a pagar para a república
    item_names = ["Água", "Luz", "Internet", "Gás", "Condomínio"]
    for _ in range(random.randint(2, 5)):  # Criando de 2 a 5 itens aleatórios
        item = ItemToPay.objects.create(
            name=random.choice(item_names),
            amount=Decimal(fake.random_int(min=50, max=500)),  
            description=fake.sentence(),
            republic=republic
        )
        # print(f'Item "{item.name}" adicionado à república "{republic.name}".')

    # Criando e associando arquivos padrão à república
    file_objects = []
    for _ in range(3):  # Criando 3 instâncias do mesmo arquivo
        with open(DEFAULT_FILE_PATH, "rb") as f:
            file_instance = File.objects.create(
                republic=republic,
                file=DjangoFile(f, name="republic.jpg")
            )
            file_objects.append(file_instance)

    # print(f'Arquivos adicionados à república "{republic.name}" com sucesso!')

    print(f'\nRepública "{republic.name}" criada com sucesso!\n')

if __name__ == '__main__':
    create_republic()
