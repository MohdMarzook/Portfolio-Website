from django.http import HttpResponse
from django.shortcuts import render
from .models import Projects
from django.db import OperationalError

def index(request):
    try:
        projects_data = Projects.objects.all().order_by('-created_at')
    except OperationalError as e:
        print(f"OperationalError: {e}")
        projects_data = []
    return render(request, 'pages/new_home.html', {'projects': projects_data})
    # return render(request, 'pages/home.html')

def about(request):
    return render(request, 'pages/about.html')

def contact(request):
    return render(request, 'pages/contact.html')

def projects(request):
    try:
        projects_data = Projects.objects.all().order_by('-created_at')
    except OperationalError as e:
        print(f"OperationalError: {e}")
        projects_data = []
    return render(request, 'pages/projects.html', {'projects': projects_data})