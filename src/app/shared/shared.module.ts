import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { GameComponent } from './components/game/game.component';

@NgModule({
  declarations: [ PageHeaderComponent, GameComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PageHeaderComponent,
    GameComponent,
  ]
})
export class SharedModule { }
