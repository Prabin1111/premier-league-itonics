import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstant } from '@sharedConstant/index';

const { publicRoute } = RouteConstant;
const routes: Routes = [ 
  {
    path: publicRoute,
    loadChildren: () => import('@publicLayout/public.module').then(module => module.PublicModule)
  },
  {
    path: '**',
    loadChildren: () => import('@publicLayout/public.module').then(module => module.PublicModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
