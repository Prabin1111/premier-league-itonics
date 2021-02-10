import { Component, Directive, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';


export class ILTableHeader implements OnInit {
  @HostBinding('class.table-header__row')

  ngOnInit() { }
}

@Component({
  selector: 'IL-hr, tr[IL-hr]',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends ILTableHeader {

  constructor() {
    super()
  }
}

