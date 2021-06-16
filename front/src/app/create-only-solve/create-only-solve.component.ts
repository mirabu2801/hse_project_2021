import { Component, OnInit } from '@angular/core';
import {OnlyTask, TaskAndSolve} from "../interfaces";
import {UserService} from "../user.service";

@Component({
  selector: 'app-create-only-solve',
  templateUrl: './create-only-solve.component.html',
  styleUrls: ['./create-only-solve.component.scss']
})
export class CreateOnlySolveComponent implements OnInit {

  constructor(private userService: UserService) { }

  inputText = '';
  outputText = '';

  task: OnlyTask = null;

  reset(): any {
    this.userService.getOnlyTask().subscribe(resp => {
      console.log('Получаем пример', resp);
      this.task = resp;
      this.inputText = this.task.text;
    });
  }

  send(): any {
    if (this.inputText.trim() === '' || this.outputText.trim() === '') {
      return;
    }
    if (this.inputText.split('\n').length !== this.outputText.split('\n').length) {
      alert('Не одинаковое кол-во переносов строки в текстах');
      return;
    }

    const tmp: TaskAndSolve = {
      id: this.task.id,
      output: this.outputText
    };

    console.log('Отрпавляю новый текст + решение', tmp);

    this.userService.sendTaskAndSolve(tmp).subscribe(resp => {
      console.log('Все успешно создалося:', resp);
    });
    this.inputText = '';
    this.outputText = '';
  }

  ngOnInit(): void {
    this.reset();
  }

}
