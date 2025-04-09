from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("O e-mail é obrigatório")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)  # Criptografa a senha
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    SOCIALIZATION_CHOICES = [('introvert', 'Introvert'), ('extrovert', 'Extrovert')]
    HOUSEHOLD_SKILLS_CHOICES = [('yes', 'Yes'), ('no', 'No')]
    CONTRIBUTION_MODES_CHOICES = [('cleaning', 'Cleaning'), ('cooking', 'Cooking'), ('organizing', 'Organizing')]

    email = models.EmailField(unique=True, default='default@email.com')
    name = models.CharField(max_length=255)
    age = models.PositiveIntegerField()
    phone_number = models.CharField(max_length=15)
    course = models.CharField(max_length=255)
    favorite_hobby = models.CharField(max_length=255)
    dislikes = models.TextField()
    socialization = models.CharField(max_length=10, choices=SOCIALIZATION_CHOICES)
    household_skills = models.CharField(max_length=3, choices=HOUSEHOLD_SKILLS_CHOICES)
    contribution_modes = models.CharField(max_length=10, choices=CONTRIBUTION_MODES_CHOICES)
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return self.email
