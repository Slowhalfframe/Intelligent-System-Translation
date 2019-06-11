from django.shortcuts import render


def index(request):
    return render(request, 'commons/index.html', {})


def page_not_found(request):
    return render(request, 'commons/404.html')



