from rest_framework import serializers

from dataset.models import DatasetRow


class RowSerializer(serializers.ModelSerializer):
    class Meta:
        model = DatasetRow
        fields = ('id', 'result', 'original')
