import datetime
import os, django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "unirep_project.settings")
django.setup()

from django.db.utils import IntegrityError
from faker import Faker
import random
from unirep_app.models import User, Republic, PayableItem


def random_date(start_date, end_date):
    days_diff = (end_date - start_date).days
    random_days = random.randint(0, days_diff)
    random_date = start_date + datetime.timedelta(days=random_days)
    return random_date


def creating_users(qtd_users):
    fake = Faker("pt_BR")
    Faker.seed(10)
    for _ in range(qtd_users):
        username = fake.name()
        email = fake.email()
        user_type = random.randrange(1, 3)

        try:
            custom_user = User(username=username, email=email, user_type=user_type)
            custom_user.save()
        except IntegrityError:
            print(f"Usuário com o e-mail '{email}' já existe. Ignorando criação.")


def creating_payable_items(qtd):
    fake = Faker("pt_BR")
    Faker.seed(10)
    for _ in range(qtd):
        items_name = ["Água", "Energia", "Gás", "Netflix"]
        name = random.choice(items_name)
        value = random.randrange(30, 80)
        user_id = random.randrange(1, 5)
        user = User.objects.get(id=user_id)

        start_date = datetime.date(2022, 1, 1)
        end_date = datetime.date(2022, 12, 31)

        payable_item = PayableItem(
            name=name,
            value=value,
            user_id=user,
            maturity_in=random_date(start_date, end_date),
            status="1",
        )
        payable_item.save()


def creating_republics(qtd_users):
    fake = Faker("pt_BR")
    Faker.seed(10)
    for _ in range(qtd_users):
        republics_names = ["Mal Te Vi", "Bem Te Vi", "Os Nerds", "Os Atrapalhados"]
        name = random.choice(republics_names)
        cellphone = fake.phone_number()
        address = fake.address()
        value = random.randrange(100, 600)
        qtd_members = random.randrange(1, 6)
        gender_names = ["MA", "FE", "MI"]
        gender = random.choice(gender_names)
        num_vacancies = 10

        user_id = random.randrange(1, 5)
        admin_user = User.objects.get(id=user_id)

        member_id = random.randrange(6, 11)
        member = User.objects.get(id=member_id)

        payable_item_id = random.randrange(1, 6)
        payable_item = PayableItem.objects.get(id=payable_item_id)

        republic = Republic(
            name=name,
            cellphone=cellphone,
            address=address,
            value=value,
            qtd_members=qtd_members,
            gender=gender,
            num_vacancies=num_vacancies,
            user_id=admin_user,
        )
        republic.save()

        republic.members.add(member)
        republic.payable_items.add(payable_item)


creating_users(10)
creating_payable_items(5)
creating_republics(5)
