import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstant } from '@sharedConstant/index';
import { NewResultComponent } from './new-result.component';

const { emptyRoute } = RouteConstant;
const routes: Routes = [{
  path: emptyRoute,
  component: NewResultComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewResultRoutingModule { }
