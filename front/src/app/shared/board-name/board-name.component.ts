import {Component, Input, OnInit} from '@angular/core';
import {Board, UserInfo} from "../../interfaces";
import {UserService} from "../../user.service";

@Component({
  selector: 'app-board-name',
  templateUrl: './board-name.component.html',
  styleUrls: ['./board-name.component.scss']
})
export class BoardNameComponent implements OnInit {

  @Input() board: Board;

  constructor(private userService: UserService) {
  }

  targetUser: UserInfo = null;

  ngOnInit(): void {
    //console.log(this.board);
    if (this.board.users.length === 2) {
      if (this.board.users[0].id === this.userService.userInfo.id) {
        this.targetUser = this.board.users[1];
      } else {
        this.targetUser = this.board.users[0];
      }
    }
    //console.log(this.targetUser);
   // console.log(this.board);
  }

}
