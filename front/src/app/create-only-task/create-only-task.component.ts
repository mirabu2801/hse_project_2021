import { Component, OnInit } from '@angular/core';
import {OnlyTask, TaskAndSolve} from "../interfaces";
import {UserService} from "../user.service";

@Component({
  selector: 'app-create-only-task',
  templateUrl: './create-only-task.component.html',
  styleUrls: ['./create-only-task.component.scss']
})
export class CreateOnlyTaskComponent implements OnInit {

  inputText = '';
  outputText = '';

  send(): any {
    if (this.inputText.trim() === '') {
      return;
    }

    const tmp: OnlyTask = {
      text: this.inputText
    };
    console.log('Отрпавляю новый чисто текст', tmp);
    this.userService.createOnlyTask(tmp).subscribe(resp => {
      console.log('Все успешно создалося:', resp);
    });
    this.inputText = '';
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
