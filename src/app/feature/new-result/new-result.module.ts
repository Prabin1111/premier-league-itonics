import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewResultRoutingModule } from './new-result-routing.module';
import { NewResultComponent } from './new-result.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResultFormComponent } from './from/result-form/result-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NewResultComponent, ResultFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NewResultRoutingModule,
    SharedModule,
  ]
})
export class NewResultModule { }
