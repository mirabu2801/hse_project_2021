import {Component, Input, OnInit} from '@angular/core';
import {BoardResponse, UserInfo} from "../../interfaces";
import {Observable} from "rxjs";

@Component({
  selector: 'user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent implements OnInit {

  @Input() userData: UserInfo;
  // user: UserInfo = {
  //   id: 1,
  //   username: 'admin',
  // };

  constructor() {
  }
  variantsColor: Array<string> = [
    'linear-gradient(138deg, rgb(183, 38, 255), rgb(70, 36, 242))',
    'linear-gradient(138deg, rgb(123, 217, 76), rgb(58, 166, 76))',
    'linear-gradient(138deg, rgb(54, 217, 203), rgb(54, 149, 217))',
    'linear-gradient(138deg, rgb(255, 102, 51), rgb(230, 46, 92))',
    'linear-gradient(138deg, rgb(36, 191, 242), rgb(36, 88, 242))',
  ];

  cl = '#fafafa';

  ngOnInit(): void {
    this.cl = this.variantsColor[this.userData.id % this.variantsColor.length];

    // localStorage.removeItem('colorUsers');
    // if (!localStorage.getItem('colorUsers')) {
    //   localStorage.setItem('colorUsers', JSON.stringify({}));
    // }
    // let c = JSON.parse(localStorage.getItem('colorUsers'));
    // console.log(c);
    // if (!c[this.user.id]) {
    //   const idx = Math.floor(Math.random() * (this.variantsColor.length));
    //   console.log(idx);
    //   c[this.user.id] = this.variantsColor[idx];
    //   localStorage.setItem('colorUsers', JSON.stringify(c));
    // }
    // this.cl = c[this.user.id];
    // console.log(localStorage.getItem('colorUsers'));
  }

}
