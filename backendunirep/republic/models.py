from django.db import models

class Republic(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default="Descrição padrão da república")
    value = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    
    HOUSING_TYPE_CHOICES = [
        ('casa', 'Casa'),
        ('apartamento', 'Apartamento'),
    ]
    housing_type = models.CharField(max_length=20, choices=HOUSING_TYPE_CHOICES, default='casa')
    
    COMMUNITY_TYPE_CHOICES = [
        ('mista', 'Mista'),
        ('feminino', 'Feminino'),
        ('masculino', 'Masculino'),
    ]
    community_type = models.CharField(max_length=20, choices=COMMUNITY_TYPE_CHOICES, default='mista')

    # Campos de localização
    address = models.CharField(max_length=255, null=True, blank=True)  # Endereço
    neighborhood = models.CharField(max_length=100, null=True, blank=True)  # Bairro
    postal_code = models.CharField(max_length=10, null=True, blank=True)  # CEP

    def __str__(self):
        return self.name
