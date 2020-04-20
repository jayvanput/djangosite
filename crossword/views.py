from django.shortcuts import get_object_or_404, render
from django.core import serializers

from .models import Clue
from random import sample, shuffle

# Create your views here.

def index(request):

    size = len(Clue.objects.all())
    pks = sample(range(1,size+1),3)

    clues = Clue.objects.filter(pk__in=pks).order_by("?")
    clues_json = serializers.serialize("json",clues)
    context = {'clues': clues_json}
    return render(request, 'crossword/index.html', context)
