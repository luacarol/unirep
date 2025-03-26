from django.db import models
from django.core.validators import FileExtensionValidator

class Address(models.Model):
    # Lista de estados do Brasil
    STATES_CHOICES = [
        ('AC', 'Acre'),
        ('AL', 'Alagoas'),
        ('AP', 'Amapá'),
        ('AM', 'Amazonas'),
        ('BA', 'Bahia'),
        ('CE', 'Ceará'),
        ('DF', 'Distrito Federal'),
        ('ES', 'Espírito Santo'),
        ('GO', 'Goiás'),
        ('MA', 'Maranhão'),
        ('MT', 'Mato Grosso'),
        ('MS', 'Mato Grosso do Sul'),
        ('MG', 'Minas Gerais'),
        ('PA', 'Pará'),
        ('PB', 'Paraíba'),
        ('PR', 'Paraná'),
        ('PE', 'Pernambuco'),
        ('PI', 'Piauí'),
        ('RJ', 'Rio de Janeiro'),
        ('RN', 'Rio Grande do Norte'),
        ('RS', 'Rio Grande do Sul'),
        ('RO', 'Rondônia'),
        ('RR', 'Roraima'),
        ('SC', 'Santa Catarina'),
        ('SP', 'São Paulo'),
        ('SE', 'Sergipe'),
        ('TO', 'Tocantins'),
    ]

    street = models.CharField(max_length=200)
    neighborhood = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=2, choices=STATES_CHOICES)
    
class File(models.Model):
    republic = models.ForeignKey('Republic', related_name='republic_files', on_delete=models.CASCADE)
    file = models.FileField(upload_to='republic_files/', validators=[FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'mp4'])])
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'File {self.id} - {self.file.name}'
    
class ItemToPay(models.Model):
    republic = models.ForeignKey('Republic', related_name='items_to_pay', on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True, default="")

    def __str__(self):
        return f"{self.name} - R${self.amount}"

class Republic(models.Model):
    name = models.CharField(max_length=150, blank=False)
    description = models.TextField(default="Republic description default")
    number_of_members = models.IntegerField(default=0)
    rent = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    address = models.OneToOneField(Address, on_delete=models.CASCADE, null=True, blank=True)
    files = models.ManyToManyField(File, related_name='republics', blank=True)

    def save(self, *args, **kwargs):
        # Se o nome não for preenchido, define o nome como 'Republic {id}'
        if not self.name:
            self.name = f'Republic {self.id}' if self.id else 'Republic'
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name