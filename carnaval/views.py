from django.shortcuts import render
from django.http import HttpResponse
import requests
from .models import Event 

def home(request):
    if request.method == 'GET':
        states = get_states()
        events = get_events()
        return render(request, "home.html", {'states': states, 'events':events})
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

def get_events():
    events = Event.objects.all()
    return events

def filter_carnaval_events(request):
    states = get_states()
    state = request.GET.get('state')
    events = Event.objects.all()
    if state:
        events = events.filter(state=state)
    return render(request, 'home.html', {'states': states,'events': events})