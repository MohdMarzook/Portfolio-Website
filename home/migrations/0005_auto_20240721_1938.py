# Generated by Django 3.1.5 on 2024-07-21 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20240721_1820'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='photo',
            field=models.ImageField(blank=True, null=True, upload_to='./static/<django.db.models.fields.CharField>'),
        ),
    ]