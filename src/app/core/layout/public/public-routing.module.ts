import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { RouteConstant } from '@sharedConstant/index';
import { DashboardComponent } from './dashboard/dashboard.component';
const { resultRoute, newResultRoute, leagueRoute } = RouteConstant;

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: resultRoute,
        loadChildren: () => import('@results/results.module').then(module => module.ResultsModule)
      },
      {
        path: newResultRoute,
        loadChildren: () => import('@newResult/new-result.module').then(module => module.NewResultModule)
      },
      {
        path: leagueRoute,
        loadChildren: () => import('@leagueTable/league-table.module').then(module => module.LeagueTableModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
