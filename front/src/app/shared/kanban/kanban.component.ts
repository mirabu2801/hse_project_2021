import {Component, OnInit} from '@angular/core';
import {DragulaService} from 'ng2-dragula';

interface CardInterface {
  title: string;
  deadline: Date;
  type: string;
  link: string;
  author: string;
  id: string;
}

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  constructor(private dragulaService: DragulaService) {}

  public data: Array<any> = [
    {
      name: 'Список задач',
      blocks: [
        {
          title: 'Надо решить контест по ссылке ниже https://informatics.mccme.ru/. Когда сделаешь перетащи в готово',
        },
        {
          title: 'Карточка из ТС 3',
        },
      ]
    },
    {
      name: 'В процессе',
      blocks: [
        {
          title: 'Карточка из ТС 2',
        },
      ]
    },
    {
      name: 'Готово',
      blocks: [
        {
          title: 'Карточка из ТС 2',
        },
      ]
    },
  ];

  flagCreate = [0, 0, 0, 0];

  test(): void {
    this.data[0].blocks.splice(1, 0, {
      title: 'Вставилось',
    });
  }

  addCard(id, text): void {
    this.data[id].blocks.push({
      title: text
    });
  }

  replaceLinks(s: string): string {
    const re = /([^\"=]{2}|^)((https?|ftp):\/\/\S+[^\s.,> )\];'\"!?])/;
    const subst = '$1 <a href="$2" target="_blank"> $2 </a>';
    return s.replace(re, subst);
  }

  inputCreateCol(id, event): boolean {
    if (event.code === 'Enter') {
      this.addCard(id, event.target.value);
      event.target.value = '';
      return false;
    }
  }

  openCreate(id): void{
    this.flagCreate[id] = 1;
    const tx = 'kanban-create-textarea-' + String(id);
    setTimeout(() => {
      document.getElementById(tx).focus();
    }, 0);
  }

  closeCreate(id): void{
    this.flagCreate[id] = 0;
  }

  ngOnInit(): void {
    const tx = 'kanban-create-textarea-0';
    console.log(document.getElementById('kanban-create-textarea-0'));
  }

  logData(): void {
    console.log(this.data);
  }
}
