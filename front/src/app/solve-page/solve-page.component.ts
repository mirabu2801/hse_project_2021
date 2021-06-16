import {Component, OnInit} from '@angular/core';
import {SendTextAlgos} from "../interfaces";
import {UserService} from "../user.service";

@Component({
  selector: 'app-solve-page',
  templateUrl: './solve-page.component.html',
  styleUrls: ['./solve-page.component.scss']
})
export class SolvePageComponent implements OnInit {
  spaceTemplate = ' ';


  s = 'Начните вводить текст и он начнет переводиться в 3ее лицо.';
  id = null;
  tmp = {4: ['он', 'текст']};
  arr = [];

  wait = false;

  constructor(private userService: UserService) {
  }

  selectOutputId = -1;

  setSelectOutputId(id): void {
    setTimeout(() => {
      this.selectOutputId = id;
    }, 0);
  }

  closeSelectOutputId(): void {
    this.selectOutputId = -1;
  }

  setChangeVariant(id, val): void {
    this.arr[id] = val;
    this.setSelectOutputId(-1);
  }

  inputText = '';

  getTranslateAlgos(): any {
    if (this.inputText.trim() === '') {
      return;
    }
    const tmp: SendTextAlgos = {
      text: this.inputText,
    };

    console.log('Отрпавляю запрос алгосу', tmp);
    this.wait = true;
    this.userService.takeTranslateAlgos(tmp).subscribe(resp => {
      console.log('Алгос прислал:', resp);
      this.s = resp.result[0];
      this.arr = this.s.split(' ');
      this.tmp = resp.result[1];
      this.wait = false;
    });
  }

  ngOnInit(): void {
    this.uploadTask();
  }

  uploadTask(): any {
    this.userService.getOnlyTask().subscribe(
      value => {
        this.id = value.id;
        this.inputText = value.text;
        this.arr = value.text.split(' ');
        this.getTranslateAlgos();
      }
    );
  }

  sendResult(): any {
    this.userService.sendTaskAndSolve({
      id: this.id,
      output: this.arr.join(' '),
    }).subscribe(value => {
      this.uploadTask();
    });
  }
}
