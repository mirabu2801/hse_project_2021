import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AutosizeModule} from 'ngx-autosize';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material-module";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { TaskAndSolvePageComponent } from './task-and-solve-page/task-and-solve-page.component';
import { CreateOnlyTaskComponent } from './create-only-task/create-only-task.component';
import { CreateOnlySolveComponent } from './create-only-solve/create-only-solve.component';
import { TotalBoardPageComponent } from './total-board-page/total-board-page.component';
import { SolvePageComponent } from './solve-page/solve-page.component';
import {ClickOutsideModule} from "ng-click-outside";

@NgModule({
  declarations: [
    AppComponent,
    TaskAndSolvePageComponent,
    CreateOnlyTaskComponent,
    CreateOnlySolveComponent,
    TotalBoardPageComponent,
    SolvePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AutosizeModule,
    AutosizeModule,
    ClickOutsideModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
