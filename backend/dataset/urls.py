from django.urls import path
from .views import CreateRawView, AddResultView, GetOriginalView, CountView, AllTasksView, AlgosView

urlpatterns = [
    path('create_raw/', CreateRawView.as_view()),
    path('add_result/', AddResultView.as_view()),
    path('get_original/', GetOriginalView.as_view()),
    path('count/', CountView.as_view()),
    path('all/', AllTasksView.as_view()),
    path('algos/', AlgosView.as_view()),
]
