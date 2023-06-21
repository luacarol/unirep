from django.shortcuts import redirect, render
from django.contrib import auth

from unirep_app.forms import LoginForm
from django.contrib.auth import models as auth_models
from unirep_app.models import Republic, User


def welcome(request):
    return render(request, "welcome.html")


def login(request):
    if request.method == "GET":
        return render(request, "login.html")

    if request.method == "POST":
        form_login = LoginForm(request.POST)

        if form_login.is_valid():
            email = form_login.cleaned_data["email"]
            password = form_login.cleaned_data["password"]

            user = auth.authenticate(email=email, password=password)

            if user is not None and user.is_active:
                auth.login(request, user)
                return redirect("home")
            else:
                print("Invalid credentials")
                return render(
                    request, "login.html", {"message": "Email ou Senha incorretos!"}
                )

        elif not form_login.is_valid():
            print("Invalid form")
            return redirect("login")


def home(request):
    if request.user.is_authenticated:
        if request.method == "GET":
            user = User.objects.get(email=request.user.email)
            return render(request, "home.html", {"user": user})
    else:
        return render(request, "login.html", {"message": "Usuário não autenticado."})


def edit_profile(request):
    if request.user.is_authenticated:
        if request.method == "GET":
            user = User.objects.get(email=request.user.email)
            return render(request, "edit_profile.html", {"user": user})

        elif request.method == "POST":
            # Pegar dados do frontend
            full_name = request.POST["full_name"]
            age = int(request.POST["age"])
            sex = request.POST["sex"]
            cellphone = request.POST["cellphone"]
            course = request.POST["course"]
            hobbie = request.POST["hobbie"]
            disgust = request.POST["disgust"]
            # print("full_name ", full_name)
            # print("age ", age)
            # print("sex ", sex)
            # print("cellphone ", cellphone)
            # print("course ", course)
            # print("hobbie ", hobbie)
            # print("disgust ", disgust)

            # Validar os dados com o forms.py
            if sex == "female":
                sex = "FE"
            elif sex == "male":
                sex = "MA"

            # Atualizar os dados do usuário
            User.objects.filter(email=request.user.email).update(
                username=full_name,
                age=age,
                sex=sex,
                cellphone=cellphone,
                course=course,
                hobbie=hobbie,
                disgust=disgust,
            )

            # Retornar mensagem de sucesso ou não

            return render(request, "edit_profile.html")
    else:
        return render(request, "login.html", {"message": "Usuário não autenticado."})


def see_items_pay(request):
    if request.method == "GET":
        # Recuperar a república que o usuário está alocado(a)

        # Recuperar os itens à pagar dessa república

        # Retornar a república e os itens à pagar para o frontend consumir os dados

        return render(request, "see_items_pay.html")

    elif request.method == "POST":
        return render(request, "see_items_pay.html")


def republics(request):
    if request.method == "GET":
        republics = Republic.objects.all()
        return render(request, "republics.html", {"republics": republics})


def republic_information(request):
    if request.method == "GET":
        # Recuperar república

        # Recuperar membros da república

        # Recuperar itens à pagar dessa república

        return render(request, "republic_information.html")


def create_republic(request):
    if request.method == "GET":
        return render(request, "create_republic.html")

    elif request.method == "POST":
        # Recuperar administrador

        # Criar república

        return render(request, "create_republic.html")


def edit_republic(request):
    if request.method == "GET":
        # Recuperar república

        # Retornar os dados da república

        return render(request, "edit_republic.html")

    elif request.method == "POST":
        # Recuperar república

        # Atualizar dados da república

        return render(request, "edit_republic.html")
