from django.db import models

## Vai representar a tabela no banco de dados
class Event(models.Model):
    name = models.CharField(max_length=100)
    date = models.DateField()
    hour = models.TimeField()
    location = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    region = models.CharField(max_length=100)

    def __str__(self):
        return self.name
