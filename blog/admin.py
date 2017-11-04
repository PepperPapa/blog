from django.contrib import admin

# Register your models here.
from .models import Notes, Tags

admin.site.register(Notes)
admin.site.register(Tags)
