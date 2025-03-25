from django.db import models

class Republic(models.Model):
    name = models.CharField(max_length=150, blank=False)

    def save(self, *args, **kwargs):
        # Se o nome não for preenchido, define o nome como 'Republic {id}'
        if not self.name:
            self.name = f'Republic {self.id}' if self.id else 'Republic'
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name