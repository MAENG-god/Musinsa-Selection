from django.urls import path
from . import views

urlpatterns = [
    path("", views.start, name="start"),
    path("choice", views.choice, name="choice"),
    path("mobile", views.mobile, name="mobile"),
    path("done", views.done, name="done"),
]
