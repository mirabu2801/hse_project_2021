import {Component} from '@angular/core';
import {NavigationStart, Router, RouterEvent} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {filter, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'project';
  spaceTemplate = ' ';
  tst = 'Вася';

  constructor() {
  }
}
