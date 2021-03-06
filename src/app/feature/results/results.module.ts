import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResultListComponent } from './result-list/result-list.component';


@NgModule({
  declarations: [ResultsComponent, ResultListComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule, 
    SharedModule,
  ],
})
export class ResultsModule { }
