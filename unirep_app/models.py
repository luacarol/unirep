from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils import timezone


class Manager(BaseUserManager):
    def create_user(self, email, username, password=None):
        try:
            if not email:
                raise ValueError("Users must have an email address.")
            if not username:
                raise ValueError("Users must have a username.")

            user = self.model(email=self.normalize_email(email), username=username)
            user.set_password(password)
            user.save(using=self._db)
            return user
        except Exception as exception:
            print(f"[Class Manager: create_user]: {exception}")

    def create_superuser(self, email, username, password):
        try:
            user = self.create_user(
                email=self.normalize_email(email), username=username, password=password
            )

            user.is_admin = True
            user.is_staff = True
            user.is_superuser = True

            user.save(using=self._db)
            return user
        except Exception as exception:
            print(f"[Class Manager: create_superuser]: {exception}")


class User(AbstractUser):
    TYPES_USERS = [
        ("1", "Normal"),
        ("2", "Admin"),
    ]
    TYPES_GENRES = [
        ("MA", "Male"),
        ("FE", "Feminine"),
    ]

    username = models.CharField(verbose_name="username", max_length=100)
    email = models.EmailField(verbose_name="email", max_length=100, unique=True)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    user_type = models.CharField(max_length=1, choices=TYPES_USERS)
    age = models.IntegerField(default=0, blank=True, null=True)
    sex = models.CharField(max_length=2, choices=TYPES_GENRES, blank=True, null=True)
    cellphone = models.CharField(max_length=11, blank=True, null=True)
    course = models.CharField(max_length=200, blank=True, null=True)
    hobbie = models.CharField(max_length=200, blank=True, null=True)
    preference = models.CharField(max_length=200, blank=True, null=True)
    disgust = models.CharField(max_length=200, blank=True, null=True)
    created_at = models.DateTimeField(default=timezone.now)

    republic_id = models.ForeignKey(
        "Republic", on_delete=models.CASCADE, blank=True, null=True
    )

    objects = Manager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def has_perm(self, perm, obj=None):
        try:
            return self.is_admin
        except Exception as exception:
            print(f"[Class User: has_perm]: {exception}")

    def has_module_perms(self, app_label):
        try:
            return True
        except Exception as exception:
            print(f"[Class User: has_module_perms]: {exception}")

    def __str__(self):
        return self.username


class PayableItem(models.Model):
    TYPES_GENRES = [
        ("1", "Payable"),  # a pagar
        ("2", "Paid"),  # pago
    ]

    name = models.CharField(max_length=200)
    value = models.FloatField()
    republic_id = models.ForeignKey("Republic", on_delete=models.CASCADE)
    user_id = models.ForeignKey(
        User, verbose_name="user_id", on_delete=models.CASCADE, blank=True, null=True
    )
    maturity_in = models.DateTimeField()  # vencimento em
    status = models.CharField(max_length=1, choices=TYPES_GENRES)
    created_at = models.DateTimeField(default=timezone.now)


class Republic(models.Model):
    TYPES_GENRES = [
        ("MA", "Male"),
        ("FE", "Feminine"),
        ("MI", "Mixed"),
    ]

    name = models.CharField(max_length=200)
    cellphone = models.CharField(max_length=15)
    address = models.CharField(max_length=200)
    value = models.IntegerField(verbose_name="value", default=0)
    qtd_members = models.IntegerField(verbose_name="qtd_members", default=0)
    gender = models.CharField(max_length=2, choices=TYPES_GENRES)
    num_vacancies = models.IntegerField(default=0)
    created_at = models.DateTimeField(default=timezone.now)
    user_id = models.ForeignKey(
        User,
        related_name="republics_as_user",
        verbose_name="user_id",
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    members = models.ManyToManyField(
        User,
        related_name="republics_as_member",
        verbose_name="members",
        blank=True,
        null=True,
    )
    payable_items = models.ManyToManyField(
        PayableItem, verbose_name="payable_items", blank=True, null=True
    )
