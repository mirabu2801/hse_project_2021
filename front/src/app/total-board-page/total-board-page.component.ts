import { Component, OnInit } from '@angular/core';
import {TotalInfo} from "../interfaces";
import {UserService} from "../user.service";

@Component({
  selector: 'app-total-board-page',
  templateUrl: './total-board-page.component.html',
  styleUrls: ['./total-board-page.component.scss']
})
export class TotalBoardPageComponent implements OnInit {

  data: TotalInfo = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getStatistic().subscribe(resp => {
      console.log('Все успешно создалося:', resp);
      this.data = resp;
    });
  }

}
