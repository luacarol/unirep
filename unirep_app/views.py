from django.shortcuts import render

def welcome(request):
    return render(request, 'welcome.html')

def login(request):
    return render(request, 'login.html')

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