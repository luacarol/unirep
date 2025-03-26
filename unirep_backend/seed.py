import os
import django
from faker import Faker
from decimal import Decimal
from django.core.files.uploadedfile import SimpleUploadedFile
import random

# Configurar Django para rodar standalone
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'unirep_backend.settings')
django.setup()

from republic.models import Republic, Address, ItemToPay, File

fake = Faker('pt_BR')

# Extensões permitidas
ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'mp4']

def create_republic():
    # Criando um endereço fictício
    address = Address.objects.create(
        street=fake.street_name(),
        neighborhood=fake.city_suffix(),
        city=fake.city(),
        state=fake.state_abbr()
    )

    # Criando a república com endereço
    republic = Republic.objects.create(
        name=fake.company(),
        description=fake.text(),
        number_of_members=fake.random_int(min=1, max=10),
        rent=Decimal(fake.random_int(min=500, max=3000)),
        address=address
    )

    # Criando arquivos fictícios para a república
    for _ in range(2):
        ext = random.choice(ALLOWED_EXTENSIONS)
        file_name = f'report_{fake.random_int(min=1, max=100)}.{ext}'
        
        # Criando conteúdo fictício conforme a extensão
        if ext in ['jpg', 'jpeg', 'png']:
            file_content = b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR'  # Simulação de um arquivo PNG
        else:  # .mp4
            file_content = b'\x00\x00\x00\x18ftypmp42'  # Simulação de um arquivo MP4

        uploaded_file = SimpleUploadedFile(file_name, file_content)
        file_instance = File.objects.create(republic=republic, file=uploaded_file)
        republic.files.add(file_instance)

    # Criando itens a pagar para a república
    for _ in range(3):
        ItemToPay.objects.create(
            name=fake.word().capitalize(),
            amount=Decimal(fake.random_int(min=50, max=500)),
            description=fake.sentence(),
            republic=republic
        )

    print(f'República "{republic.name}" criada com sucesso!')

if __name__ == '__main__':
    create_republic()
