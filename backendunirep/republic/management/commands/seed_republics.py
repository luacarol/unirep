from django.core.management.base import BaseCommand
from republic.models import Republic

class Command(BaseCommand):
    help = 'Seed three republics without assigning users'

    def handle(self, *args, **kwargs):
        rep_list = [
            {
                "name": "República dos Sonhos",
                "description": "A República dos Sonhos é um lugar mágico onde cada dia é uma nova aventura. Aqui, os moradores compartilham histórias, risadas e experiências.",
                "value": 800.00,
                "housing_type": "apartamento",
                "community_type": "mista",
                "address": "Rua das Flores, 123",
                "neighborhood": "Centro",
                "postal_code": "12345-678"
            },
            {
                "name": "República da Amizade",
                "description": "A República da Amizade é o lar de muitos estudantes que compartilham momentos incríveis e criam laços para a vida toda.",
                "value": 650.00,
                "housing_type": "casa",
                "community_type": "feminino",
                "address": "Avenida da Liberdade, 456",
                "neighborhood": "Jardim das Acácias",
                "postal_code": "23456-789"
            },
            {
                "name": "República da Diversão",
                "description": "A República da Diversão é onde a vida universitária se torna ainda mais emocionante com festas, eventos e atividades.",
                "value": 900.00,
                "housing_type": "apartamento",
                "community_type": "masculino",
                "address": "Praça Central, 789",
                "neighborhood": "Alto da Colina",
                "postal_code": "34567-890"
            }
        ]

        for rep in rep_list:
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
            self.stdout.write(self.style.SUCCESS(f"{republic.name} criada com sucesso!"))
