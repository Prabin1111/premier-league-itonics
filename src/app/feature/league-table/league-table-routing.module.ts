import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstant } from '@sharedConstant/index';
import { LeagueTableComponent } from './league-table.component';

const { emptyRoute } = RouteConstant;
const routes: Routes = [
  {
    path: emptyRoute,
    component: LeagueTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueTableRoutingModule { }
