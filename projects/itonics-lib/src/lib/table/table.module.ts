import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HeaderCellComponent } from './header/header-cell/header-cell.component';
import { BodyCellComponent } from './body/body-cell/body-cell.component';

const COMPONENTS = [
  TableComponent, HeaderComponent, HeaderCellComponent, BodyComponent, BodyCellComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class TableModule { }
