import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

export const HEADER_CELL_TEMPLATE = `<ng-content></ng-content>`;

export class ILTableHeaderCell implements OnInit {
  @HostBinding('class.table-header__cell')

  ngOnInit() { }
}

@Component({
  selector: 'IL-hc, th[IL-hc]',
  template: HEADER_CELL_TEMPLATE,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header-cell.component.scss']
})
export class HeaderCellComponent extends ILTableHeaderCell {

  constructor() {
    super()
  }
}
