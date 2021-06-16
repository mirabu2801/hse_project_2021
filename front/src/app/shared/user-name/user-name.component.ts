import {Component, Input, OnInit} from '@angular/core';
import {UserInfo} from "../../interfaces";

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.scss']
})
export class UserNameComponent implements OnInit {

  @Input() user: UserInfo;
  @Input() color: boolean = false;
  @Input() prefix: string = '';

  constructor() { }

  name = '';

  cl = 'black';

  variantsColor: Array<string> = [
    'rgb(70, 36, 242)',
    'rgb(58, 166, 76)',
    'rgb(54, 149, 217)',
    'rgb(230, 46, 92)',
    'rgb(36, 88, 242)',
  ];

  ngOnInit(): void {
    this.name = this.user.username;

    if (this.user.first_name) {
      this.name = this.user.first_name;
    }
    if (this.user.last_name) {
      this.name += ' ' + this.user.first_name;
    }

    if (this.color) {
      this.cl = this.variantsColor[this.user.id % this.variantsColor.length];
    }

  }

}
