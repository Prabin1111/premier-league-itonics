import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

export class TableComponentBasic implements OnInit {
  @HostBinding('class.table-container')
  ngOnInit(): void {
  }

}


@Component({
  selector: 'IL-table, [ILTable]',
  templateUrl: './table.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./table.component.scss'],

})
export class TableComponent extends TableComponentBasic {
  constructor() {
    super();
  }
}
