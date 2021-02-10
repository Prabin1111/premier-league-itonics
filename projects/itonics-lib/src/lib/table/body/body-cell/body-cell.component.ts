import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

export const BODY_CELL_TEMPLATE = `<ng-content></ng-content>`;
export class ILTableBodyCell implements OnInit {
  @HostBinding('class.table-body__cell')

  ngOnInit() { }
}

@Component({
  selector: 'IL-dc, td[IL-dc]',
  template: BODY_CELL_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./body-cell.component.scss']
})
export class BodyCellComponent extends ILTableBodyCell {

  constructor() {
    super()
  }
}
