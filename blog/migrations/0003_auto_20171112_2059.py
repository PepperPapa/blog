# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-12 12:59
from __future__ import unicode_literals

import ckeditor_uploader.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_auto_20171104_1135'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notes',
            name='content',
            field=ckeditor_uploader.fields.RichTextUploadingField(verbose_name='正文'),
        ),
    ]