import random

from django.http import HttpResponse, JsonResponse
from rest_framework import views
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import generics

from dataset.models import DatasetRow
from django.db.models import Q

from dataset.serializers import RowSerializer

from .algos import algos


class CreateRawView(views.APIView):
    def post(self, request: Request):
        text = request.data['text']
        for absaz in text.split('\n\n'):
            absaz = absaz.strip()
            while (absaz.strip() + ' ')[0] == '–':
                absaz = absaz[1:]
            if len(absaz) > 4:
                DatasetRow.objects.create(original=absaz)
        return Response('success', status=201)


class AlgosView(views.APIView):
    def post(self, request: Request):
        text = request.data['text']
        return Response({'result': algos(text)})


class AddResultView(views.APIView):
    def patch(self, request: Request):
        input_text = request.data.get('input')
        result = request.data['output']
        if input_text is None:
            row_id = request.data['id']
            row: DatasetRow = DatasetRow.objects.get(id=row_id)
            row.result = result
            row.save()
        else:
            results = result.split('\n')
            inputs = input_text.split('\n')
            if len(inputs) != len(results):
                return Response('Разное колличестов абзацев', status=400)
            for i in range(len(results)):
                DatasetRow.objects.create(original=inputs[i], result=results[i])
        return Response('success', status=201)


class GetOriginalView(views.APIView):
    def get(self, request: Request):
        try:
            objects = DatasetRow.objects.filter(result='').all()
            count = objects.count()
            if count == 1:
                random_idx = 0
            else:
                random_idx = random.randint(0, count - 1)
            dataset_row: DatasetRow = objects[random_idx]
            return JsonResponse({
                'id': dataset_row.id,
                'text': dataset_row.original,
            })
        except Exception:
            return JsonResponse({
                'id': None,
                'text': '',
            })


class CountView(views.APIView):
    def get(self, request):
        not_solved = DatasetRow.objects.filter(result='').count()
        solved = DatasetRow.objects.filter(~Q(result=''))
        solved_total = 0
        for task in solved:
            solved_total += len(task.result.split('.'))

        return JsonResponse({
            'cnt_task_without_solve': not_solved,
            'cnt_task_and_solve_complete_abzac': solved.count(),
            'cnt_task_and_solve_complete_total': solved_total,
        })




class AllTasksView(generics.ListAPIView):
    serializer_class = RowSerializer
    queryset = DatasetRow.objects.all()
