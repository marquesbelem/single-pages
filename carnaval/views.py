from django.shortcuts import render
from django.http import HttpResponse
import requests

def home(request):
    if request.method == 'GET':
        states = get_states()
        return render(request, "home.html", {'states': states})
    elif request.method == 'POST':
        return HttpResponse('POST request')
    
def get_states():
    url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    response = requests.get(url)
    if(response.status_code == 200):
        states = response.json()
        return sorted(states, key=lambda state: state['nome'])
    else: 
        print(f"Erro ao acessar a API: {response.status_code}")
        return [] 