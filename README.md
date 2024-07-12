# unirep
Este repositório contém o meu Trabalho de Conclusão de Curso (TCC) para o curso de Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal de Jacareí.

# Instalar virtualenv se ainda não estiver instalado
pip install virtualenv

# Criar um novo ambiente virtual
virtualenv venv

# Ativar o ambiente virtual
# No Windows
venv\Scripts\activate
# No Linux/Mac
source venv/bin/activate

# Instalar Django e DRF
pip install django djangorestframework

# Criar e aplicar migrações
cd backend_unirep

python manage.py makemigrations
python manage.py migrate

# Criar um superusuário para acessar o admin
python manage.py createsuperuser

# Iniciar o servidor
python manage.py runserver