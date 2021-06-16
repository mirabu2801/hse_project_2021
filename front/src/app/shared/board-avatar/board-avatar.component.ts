import {Component, Input, OnInit} from '@angular/core';
import {Board, UserInfo} from "../../interfaces";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-board-avatar',
  templateUrl: './board-avatar.component.html',
  styleUrls: ['./board-avatar.component.scss']
})
export class BoardAvatarComponent implements OnInit {

  @Input() board: Board;

  constructor(private userService: UserService) {
  }
  variantsColor: Array<string> = [
    'linear-gradient(138deg, rgb(183, 38, 255), rgb(70, 36, 242))',
    'linear-gradient(138deg, rgb(123, 217, 76), rgb(58, 166, 76))',
    'linear-gradient(138deg, rgb(54, 217, 203), rgb(54, 149, 217))',
    'linear-gradient(138deg, rgb(255, 102, 51), rgb(230, 46, 92))',
    'linear-gradient(138deg, rgb(36, 191, 242), rgb(36, 88, 242))',
  ];

  cl = '#fafafa';

  targetUser: UserInfo = null;

  ngOnChanges(): void {
    //console.log(this.board);
    if (this.board.users.length === 2) {
      if (this.board.users[0].id === this.userService.userInfo.id) {
        this.targetUser = this.board.users[1];
      } else {
        this.targetUser = this.board.users[0];
      }
    }
    //console.log(this.targetUser);
    //console.log(this.board);

    this.cl = this.variantsColor[this.board.id % this.variantsColor.length];
  }

  ngOnInit(): void {

  }
}
