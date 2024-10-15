from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    full_name = models.CharField(max_length=100, null=True, blank=True)
    age = models.PositiveIntegerField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=[('M', 'Masculino'), ('F', 'Feminino')], null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True) 
    profile_image = models.ImageField(upload_to='profile_images/', null=True, blank=True)

    UNIVERSITY_COURSE_CHOICES = [
        ('Ciências Exatas', 'Ciências Exatas'),
        ('Ciências Biológicas', 'Ciências Biológicas'),
        ('Ciências Humanas', 'Ciências Humanas'),
        ('Ciências Sociais Aplicadas', 'Ciências Sociais Aplicadas'),
        ('Artes', 'Artes'),
        ('Tecnológicos', 'Tecnológicos'),
    ]

    university_course = models.CharField(
        max_length=50,
        choices=UNIVERSITY_COURSE_CHOICES,
        null=True,
        blank=True
    )

    PREFERRED_HOUSING_CHOICES = [
        ('Casa', 'Casa'),
        ('Apartamento', 'Apartamento'),
    ]

    preferred_housing = models.CharField(
        max_length=50,
        choices=PREFERRED_HOUSING_CHOICES,
        null=True,
        blank=True
    )

    PREFERRED_ACCOMMODATION = [
        ('Quarto individual', 'Quarto individual'),
        ('Quarto compartilhado', 'Quarto compartilhado'),
    ]

    preferred_accommodation = models.CharField(
        max_length=50,
        choices=PREFERRED_ACCOMMODATION,
        null=True,
        blank=True
    )

    smoker = models.BooleanField(default=False) 
    pets_allowed = models.BooleanField(default=False)

    STUDY_SCHEDULES = [
        ('Manhã', 'Manhã'),
        ('Tarde', 'Tarde'),
        ('Noite', 'Noite'),
    ]

    study_schedules = models.CharField(
        max_length=50,
        choices=STUDY_SCHEDULES,
        null=True,
        blank=True
    )

    ORGANIZATION_AND_CLEANING = [
        ('Muita importância', 'Muita importância'),
        ('Mediana', 'Mediana'),
        ('Pouca', 'Pouca'),
    ]

    organization_and_cleaning = models.CharField(
        max_length=50,
        choices=ORGANIZATION_AND_CLEANING,
        null=True,
        blank=True
    )

    LEVEL_SOCIALIZATION = [
        ('Gosta de interações sociais constantes', 'Gosta de interações sociais constantes'),
        ('Prefere mais privacidade', 'Prefere mais privacidade'),
    ]

    level_socialization = models.CharField(
        max_length=50,
        choices=LEVEL_SOCIALIZATION,
        null=True,
        blank=True
    )

    FEEDING_PREFERENCES = [
        ('Vegetariano', 'Vegetariano'),
        ('Vegano', 'Vegano'),
        ('Carnívoro', 'Carnívoro'),
    ]

    feeding_preferences = models.CharField(
        max_length=50,
        choices=FEEDING_PREFERENCES,
        null=True,
        blank=True
    )

    PERSONALITY_TEST_OR_PREDOMINANT_TRAITS = [
        ('Introvertido', 'Introvertido'),
        ('Extrovertido', 'Extrovertido'),
    ]

    personality_test_or_predominant_traits = models.CharField(
        max_length=50,
        choices=PERSONALITY_TEST_OR_PREDOMINANT_TRAITS,
        null=True,
        blank=True
    )

    PREFERENCES_ENVIRONMENTS = [
        ('Calmos', 'Calmos'),
        ('Agitados', 'Agitados'),
    ]

    preferences_environments = models.CharField(
        max_length=50,
        choices=PREFERENCES_ENVIRONMENTS,
        null=True,
        blank=True
    )

    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',
        blank=True,
    )
