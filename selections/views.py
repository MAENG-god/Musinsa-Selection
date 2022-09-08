import http
from re import template
from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
# Create your views here.


def start(request):
    template = loader.get_template('selections/start.html')
    context = {
        
    }
    return HttpResponse(template.render(context, request))

def choice(request):
    template = loader.get_template('selections/choice.html')
    context = {
        
    }
    return HttpResponse(template.render(context, request))

def mobile(request):
    template = loader.get_template('selections/mobile.html')
    context = {
        
    }
    return HttpResponse(template.render(context, request))

def done(request):
    template = loader.get_template('selections/done.html')
    context = {
        
    }
    return HttpResponse(template.render(context, request))