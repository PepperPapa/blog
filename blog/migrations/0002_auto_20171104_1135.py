# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-04 03:35
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notes',
            name='content',
            field=models.TextField(max_length=50000),
        ),
    ]