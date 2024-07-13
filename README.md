# unirep
Este repositório contém o meu Trabalho de Conclusão de Curso (TCC) para o curso de Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal de Jacareí.

# Instalar virtualenv se ainda não estiver instalado
pip install virtualenv

# Criar um ambiente virtual para o backend e para o frontendo
cd backend_unirep 
virtualvenv venv

cd frontend_unirep
virtualvenv venv

# Ativar o ambiente virtual
# No Windows
venv\Scripts\activate
# No Linux/Mac
source venv/bin/activate

# Instale as dependências do backend
pip install -r requirements.txt

# Instale as dependências do frontend
npm install