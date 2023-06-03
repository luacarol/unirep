from django.shortcuts import redirect, render
from django.contrib import auth

from unirep_app.forms import LoginForm
from django.contrib.auth import models as auth_models
from unirep_app.models import User

def welcome(request):
    return render(request, 'welcome.html')

def login(request):

    if request.method == 'GET':
        return render(request, 'login.html')

    if request.method == 'POST':

        form_login = LoginForm(request.POST)

        if form_login.is_valid():
            email = form_login.cleaned_data['email']
            password = form_login.cleaned_data['password']

            user = auth.authenticate(email=email, password=password)

            if user is not None and user.is_active:
                auth.login(request, user)
                return redirect('home')
            else:
                print("Invalid credentials")
                return render(request, 'login.html', {'message': 'Usuário ou Senha incorretos!'})
    
        elif not form_login.is_valid():
            print("Invalid form")
            return redirect('login')

def home(request):

    if request.user.is_authenticated:

        if request.method == 'GET':
            user = User.objects.get(email=request.user.email)
            return render(request, 'home.html', {'user': user})

    else:
        return render(request, 'login.html', {'message': 'Usuário não autenticado.'})

def edit_profile(request):

    if request.method == 'GET':

        # Pegar o usuário

        # Retornar esse usuário para o frontend consumir seus dados

        return render(request, 'edit_profile.html')

    elif request.method == 'POST':

        # Pegar dados do frontend

        # Validar os dados com o forms.py

        # Atualizar os dados do usuário

        # Retornar mensagem de sucesso ou não

        return render(request, 'edit_profile.html')

def see_items_pay(request):

    if request.method == 'GET':

        # Recuperar a república que o usuário está alocado(a)

        # Recuperar os itens à pagar dessa república

        # Retornar a república e os itens à pagar para o frontend consumir os dados

        return render(request, 'see_items_pay.html')
    
    elif request.method == 'POST':

        return render(request, 'see_items_pay.html')

def republics(request):

    if request.method == 'GET':

        # Recuperar todas as repúblicas existentes

        # Retornar as repúblicas

        return render(request, 'republics.html')

def republic_information(request):

    if request.method == 'GET':

        # Recuperar república

        # Recuperar membros da república

        # Recuperar itens à pagar dessa república

        return render(request, 'republic_information.html')

def create_republic(request):
    return render(request, 'create_republic.html')

def edit_republic(request):
    return render(request, 'edit_republic.html')