from django.shortcuts import render

def login(request):
    return render(request, 'login.html')

def home(request):
    return render(request, 'home.html')

def edit_profile(request):
    return render(request, 'edit_profile.html')

def see_items_pay(request):
    return render(request, 'see_items_pay.html')

def republics(request):
    return render(request, 'republics.html')