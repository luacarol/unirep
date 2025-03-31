from django.db import models

class User(models.Model):
    SOCIALIZATION_CHOICES = [
        ('introvert', 'Introvert'),
        ('extrovert', 'Extrovert'),
    ]

    HOUSEHOLD_SKILLS_CHOICES = [
        ('yes', 'Yes'),
        ('no', 'No'),
    ]

    CONTRIBUTION_MODES_CHOICES = [
        ('cleaning', 'Cleaning'),
        ('cooking', 'Cooking'),
        ('organizing', 'Organizing'),
    ]

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

    def __str__(self):
        return self.name
