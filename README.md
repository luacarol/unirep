# Unirep

Este repositório contém o meu Trabalho de Conclusão de Curso (TCC) para o curso de Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal de Jacareí.

## Configuração do Ambiente

### Pré-requisitos

- Python 3.9.5
- Node.js
- npm
- virtualenv

### Instalação

#### 1. Instalar virtualenv se ainda não estiver instalado
```bash
pip install virtualenv
```

#### 2. Configurar o ambiente virtual para o backend
```bash
cd backend_unirep
virtualenv venv
```

#### 3. Configurar o ambiente virtual para o frontend
```bash
cd frontend_unirep
virtualenv venv
```

### Ativar o Ambiente Virtual
### No Windows
```bash
venv\Scripts\activate
```
### No Linux/Mac
```bash
source venv/bin/activate
```

### Instalar Dependências
### Backend
```bash
pip install -r requirements.txt
```
### Frontend
```bash
npm install
```

### Executando o Projeto
### Backend
```bash
cd backend_unirep
source venv/bin/activate  # Ativar o ambiente virtual, caso ainda não esteja ativo
python manage.py runserver
```
### Frontend
```bash
cd frontend_unirep
npm start
```

### Estrutura do Repositório

backend_unirep/: Contém o código-fonte do backend, desenvolvido em Django.
frontend_unirep/: Contém o código-fonte do frontend, desenvolvido em React.

### Estrutura do Repositório

Para mais informações, entre em contato pelo email luanaanjos2023@gmail.com.