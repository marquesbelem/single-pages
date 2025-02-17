# single-pages

# Informações importantes para projeto Django

## Preparação do ambiente primeira vez
rodar o comando *python -m venv venv*
rodar o *. venv/Scripts/activate* para ativar o ambiente virtual
rodar o comando *pip install django*
rodar o comando *django-admin startproject nome-projeto .*

## Subir o servidor
rodar o *. venv/Scripts/activate* para ativar o ambiente virtual
rodar o comando *python manage.py runserver*

## Painel de Admin 
O painel de administração do Django só pode ser acessado por usuários com permissões de superusuário. Para criar um superusuário, execute o seguinte comando no terminal:
*python manage.py createsuperuser*

### Personalizando o Painel de Administração 
Para personalizar o painel de administração para gerenciar seus modelos (como o modelo Evento que você criou), registre o modelo no arquivo **admin.py** do seu aplicativo

## Arquitetura do projeto 

### Pasta principal: Single Page
**urls.py:** roteamento da aplicação
**settings.py:** configurações do projeto
**manage.py:** contém os comandos necessarios para rodar qualquer coisa dentro do Django

### Aplicações
Quebrar o projeto em pequenas aplicações. 

Para criar aplicação rodar o comando *python manage.py startapp nome-app*

Todo app novo criado precisa ser adicionado no *INSTALLED_APPS* que fica no settings.py

Para criar a model no db rodar *python manage.py makemigrations* *python manage.py migrate*

### API Externa
Utilizando o https://servicodados.ibge.gov.br/ para pegar dados