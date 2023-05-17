from django.db import models


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
    cuty = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    gender = models.CharField(max_length=2, choices=TYPES_GENRES)
    num_vacancies = models.IntegerField()
    created_in = models.DateField()
