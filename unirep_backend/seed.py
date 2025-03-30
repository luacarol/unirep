import os
import django
from faker import Faker
from decimal import Decimal
from django.core.files.storage import default_storage
from django.core.files import File as DjangoFile

# Configurar Django para rodar standalone
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'unirep_backend.settings')
django.setup()

from republic.models import Republic, Address, ItemToPay, File

fake = Faker('pt_BR')

# Caminho do arquivo para ser alocado
DEFAULT_FILE_PATH = os.path.join('media', 'default_files', 'republic.jpg')

def create_republic():
    # Criando um endereço fictício
    address = Address.objects.create(
        street=fake.street_name(),
        number=fake.random_int(min=1, max=10),
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

    # Garantindo que o arquivo existe
    if os.path.exists(DEFAULT_FILE_PATH):
        # Usando default_storage para salvar o arquivo no diretório de mídia
        with open(DEFAULT_FILE_PATH, 'rb') as f:
            # Salvando o arquivo no Django Storage
            uploaded_file = default_storage.save('republic_files/republic.jpeg', DjangoFile(f, name='republic.jpeg'))
            
            # Criando a instância do modelo File e associando ao campo 'file'
            file_instance = File.objects.create(republic=republic, file=uploaded_file)
            republic.files.add(file_instance)
    else:
        print(f"Arquivo {DEFAULT_FILE_PATH} não encontrado!")

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
