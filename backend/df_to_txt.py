from dataset.models import DatasetRow


def df_to_txt(file_name="df.txt"):
    rows = list(DatasetRow.objects.exclude(result=''))
    string = '\n'.join([f'in: {row.original} [end] out: {row.result} </s>' for row in rows])
    file = open(file_name, 'w')
    print(string, file=file)
    file.close()
