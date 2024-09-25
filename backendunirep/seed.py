import os
import django
from random import choice, uniform

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backendunirep.settings")
django.setup()

from republic.models import Republic 

def create_republics():
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
            address=rep["address"],  # Novo campo de endereço
            neighborhood=rep["neighborhood"],  # Novo campo de bairro
            postal_code=rep["postal_code"]  # Novo campo de CEP
        )
        republic.save()
        print(f"{republic.name} criada com sucesso!")

if __name__ == "__main__":
    create_republics()
