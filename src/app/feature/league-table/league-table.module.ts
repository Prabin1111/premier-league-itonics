import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueTableRoutingModule } from './league-table-routing.module';
import { LeagueTableComponent } from './league-table.component';
import { TableModule } from 'itonics-lib';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LeagueTableComponent],
  imports: [
    CommonModule,
    LeagueTableRoutingModule,
    TableModule,
    SharedModule
  ]
})
export class LeagueTableModule { }
