from django.shortcuts import redirect, render
from django.contrib import auth

from unirep_app.forms import LoginForm
from django.contrib.auth import models as auth_models

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

    #Quanto a alocação do usuário em uma república:
    # 1 - usuário que não realizou nenhuma solicitação
    # 2 - usuário com solicitação pendente
    # 3 - usuário com solicitação aprovada
    # 4 - usuário com solicitação recusada
    # 5 - usuário do tipo administrador
    type_user = '1'

    # Solicitações de entrada
    incoming_requests = False
    # Se existe república
    exists_republic = False

    if type_user == '5':
        incoming_requests = False
        exists_republic = False

    return render(request, 'home.html', {
        'type_user': type_user,
        'incoming_requests': incoming_requests,
        'exists_republic': exists_republic
    })

def edit_profile(request):
    return render(request, 'edit_profile.html')

def see_items_pay(request):
    return render(request, 'see_items_pay.html')

def republics(request):

    context = {
    }

    return render(request, 'republics.html', context)

def republic_information(request):
    return render(request, 'republic_information.html')

def create_republic(request):
    return render(request, 'create_republic.html')

def edit_republic(request):
    return render(request, 'edit_republic.html')