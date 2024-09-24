import os
import django
from random import choice, uniform

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backendunirep.settings")
django.setup()

from republic.models import Republic 

def create_republics():
    housing_types = ['casa', 'apartamento']
    community_types = ['mista', 'feminino', 'masculino']
    
    rep_list = []

    for i in range(1, 11):  # Criando 10 repúblicas
        rep = {
            "name": f"República dos Sonhos {i}",
            "description": f"A República dos Sonhos {i} é um lugar mágico onde cada dia é uma nova aventura. Aqui, os moradores compartilham histórias, risadas e experiências. Nossos espaços são projetados para promover a amizade e a colaboração, com eventos mensais que incluem noites de jogos, churrascos e sessões de cinema. Venha fazer parte dessa comunidade vibrante e descubra o que significa viver em harmonia!",
            "value": round(uniform(500, 1200), 2),  # Valor aleatório entre 500 e 1200
            "housing_type": choice(housing_types),
            "community_type": choice(community_types),
        }
        rep_list.append(rep)

    for i, rep in enumerate(rep_list, start=1):
        republic = Republic(
            name=rep["name"].replace("{i}", str(i)),  # Substitui {i} pelo número da república
            description=rep["description"],
            value=rep["value"],
            housing_type=rep["housing_type"],
            community_type=rep["community_type"]
        )
        republic.save()
        print(f"{republic.name} criada com sucesso!")

if __name__ == "__main__":
    create_republics()
