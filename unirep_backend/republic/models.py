from django.db import models

class Republic(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(default="Description of the republic...")
