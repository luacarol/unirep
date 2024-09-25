from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    idade = models.PositiveIntegerField(null=True, blank=True)
    genero = models.CharField(max_length=10, choices=[('M', 'Masculino'), ('F', 'Feminino')], null=True, blank=True)

    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',  # Adicione um nome único
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',  # Adicione um nome único
        blank=True,
    )
