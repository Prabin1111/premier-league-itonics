import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstant } from '@sharedConstant/index';
import { ResultsComponent } from './results.component';

const { emptyRoute } = RouteConstant;
const routes: Routes = [
  {
    path: emptyRoute, 
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
