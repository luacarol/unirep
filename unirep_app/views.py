from django.shortcuts import render

def login(request):
    return render(request, 'login.html')

def home(request):

    # 1 - usuário sem moradia
    # 2 - usuário com moradia
    # 3 - administrador

    type_user = '1'

    return render(request, 'home.html', {
        'type_user': type_user
    })

def edit_profile(request):
    return render(request, 'edit_profile.html')

def see_items_pay(request):
    return render(request, 'see_items_pay.html')

def republics(request):
    return render(request, 'republics.html')

def republic_information(request):
    return render(request, 'republic_information.html')