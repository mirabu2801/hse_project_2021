import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskAndSolvePageComponent} from "./task-and-solve-page/task-and-solve-page.component";
import {CreateOnlyTaskComponent} from './create-only-task/create-only-task.component';
import {CreateOnlySolveComponent} from "./create-only-solve/create-only-solve.component";
import {TotalBoardPageComponent} from "./total-board-page/total-board-page.component";
import {SolvePageComponent} from "./solve-page/solve-page.component";

const routes: Routes = [
  {path: 'task_and_solve', component: TaskAndSolvePageComponent},
  {path: 'create_only_task', component: CreateOnlyTaskComponent},
  {path: 'create_only_solve', component: CreateOnlySolveComponent},
  {path: 'total', component: TotalBoardPageComponent},
  {path: 'solve', component: SolvePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
