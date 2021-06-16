import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {TaskAndSolve} from "../interfaces";

@Component({
  selector: 'app-task-and-solve-page',
  templateUrl: './task-and-solve-page.component.html',
  styleUrls: ['./task-and-solve-page.component.scss']
})
export class TaskAndSolvePageComponent implements OnInit {

  inputText = '';
  outputText = '';

  send(): any {
    if (this.inputText.trim() === '' || this.outputText.trim() === '') {
      return;
    }
    if (this.inputText.split('\n').length !== this.outputText.split('\n').length) {
      alert('Не одинаковое кол-во переносов строки в текстах');
      return;
    }

    const tmp: TaskAndSolve = {
      id: -1,
      input: this.inputText,
      output: this.outputText
    };

    console.log('Отрпавляю новый текст + решение', tmp);

    this.userService.sendTaskAndSolve(tmp).subscribe(resp => {
      console.log('Все успешно создалося:', resp);
    });
    this.inputText = '';
    this.outputText = '';
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
