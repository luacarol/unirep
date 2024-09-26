import os
import django
from random import choice, uniform, randint

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backendunirep.settings")
django.setup()

from republic.models import Republic
from user.models import CustomUser  # Importe o seu modelo de usuário personalizado
from django.contrib.auth.hashers import make_password  # Para definir senhas

def create_republics_and_users():
    housing_types = ['casa', 'apartamento']
    community_types = ['mista', 'feminino', 'masculino']
    
    # Exemplos de endereços, bairros e CEPs
    addresses = [
        "Rua das Flores, 123",
        "Avenida da Liberdade, 456",
        "Praça Central, 789",
        "Rua da Paz, 101",
        "Avenida dos Sonhos, 202",
    ]
    
    neighborhoods = [
        "Jardim das Acácias",
        "Centro",
        "Alto da Colina",
        "Vila Nova",
        "Parque das Águas",
    ]
    
    postal_codes = [
        "12345-678",
        "23456-789",
        "34567-890",
        "45678-901",
        "56789-012",
    ]
    
    user_first_names = ["João", "Maria", "Lucas", "Ana", "Pedro", "Paula", "Tiago", "Julia", "Marcos", "Carla"]
    user_last_names = ["Silva", "Santos", "Pereira", "Oliveira", "Souza", "Ferreira", "Costa", "Rodrigues", "Almeida", "Barbosa"]
    
    rep_list = []

    for i in range(1, 11):  # Criando 10 repúblicas
        rep = {
            "name": f"República dos Sonhos {i}",
            "description": f"A República dos Sonhos {i} é um lugar mágico onde cada dia é uma nova aventura. Aqui, os moradores compartilham histórias, risadas e experiências. Nossos espaços são projetados para promover a amizade e a colaboração, com eventos mensais que incluem noites de jogos, churrascos e sessões de cinema. Venha fazer parte dessa comunidade vibrante e descubra o que significa viver em harmonia!",
            "value": round(uniform(500, 1200), 2),  # Valor aleatório entre 500 e 1200
            "housing_type": choice(housing_types),
            "community_type": choice(community_types),
            "address": choice(addresses),  # Adiciona um endereço aleatório
            "neighborhood": choice(neighborhoods),  # Adiciona um bairro aleatório
            "postal_code": choice(postal_codes)  # Adiciona um CEP aleatório
        }
        rep_list.append(rep)

    for i, rep in enumerate(rep_list, start=1):
        republic = Republic(
            name=rep["name"],
            description=rep["description"],
            value=rep["value"],
            housing_type=rep["housing_type"],
            community_type=rep["community_type"],
            address=rep["address"],
            neighborhood=rep["neighborhood"],
            postal_code=rep["postal_code"]
        )
        republic.save()
        print(f"{republic.name} criada com sucesso!")

        # Criar 5 usuários falsos para cada república
        for j in range(5):
            first_name = choice(user_first_names)
            last_name = choice(user_last_names)
            username = f"{first_name.lower()}{last_name.lower()}{randint(1, 100)}"
            email = f"{username}@example.com"

            user = CustomUser.objects.create(
                username=username,
                first_name=first_name,
                last_name=last_name,
                email=email,
                age=randint(18, 30),
                gender=choice(['M', 'F']),
                password=make_password('password123'),  # Definir uma senha segura
            )
            republic.members.add(user)  # Associar o usuário à república
            print(f"Usuário {user.username} criado e associado à {republic.name}")

if __name__ == "__main__":
    create_republics_and_users()
