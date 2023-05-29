from django.utils import timezone
from django.db import models

class User(models.Model):
    TYPES_USERS = [
        ("1", "Normal"),
        ("2", "Admin"),
    ]
    TYPES_GENRES = [
        ("MA", "Male"),
        ("FE", "Feminine"),
    ]

    name = models.CharField(max_length=200)
    user_type = models.CharField(max_length=1, choices=TYPES_USERS)
    age = models.IntegerField(default=0)
    sex = models.CharField(max_length=2, choices=TYPES_GENRES)
    cellphone = models.CharField(max_length=11)
    email = models.EmailField()
    course = models.CharField(max_length=200)
    hobbie = models.CharField(max_length=200)
    preference = models.CharField(max_length=200)
    disgust = models.CharField(max_length=200)
    created_in = models.DateTimeField(default=timezone.now)

class Republic(models.Model):
    TYPES_GENRES = [
        ("MA", "Male"),
        ("FE", "Feminine"),
        ("MI", "Mixed"),
    ]

    name = models.CharField(max_length=200)
    cellphone = models.CharField(max_length=11)
    address = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=50)
    district = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    gender = models.CharField(max_length=2, choices=TYPES_GENRES)
    num_vacancies = models.IntegerField(default=0)
    created_in = models.DateTimeField(default=timezone.now)
    user_id = models.ForeignKey(User, verbose_name='user_id', on_delete=models.CASCADE, blank=True, null=True)

class PayableItem(models.Model):
    TYPES_GENRES = [
        ("1", "Payable"),
        ("2", "Paid"),
    ]

    name = models.CharField(max_length=200)
    value = models.FloatField()
    republic_id = models.ForeignKey(Republic, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, verbose_name='user_id', on_delete=models.CASCADE, blank=True, null=True)
    maturity_in = models.DateTimeField()
    status = models.CharField(max_length=1, choices=TYPES_GENRES)
    created_in = models.DateTimeField(default=timezone.now)
