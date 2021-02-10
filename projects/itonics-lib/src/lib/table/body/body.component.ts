import { Component, HostBinding,  OnInit, ViewEncapsulation } from '@angular/core';
export class ILTableBody implements OnInit {
  @HostBinding('class.table-body__row')

  ngOnInit() { }
}

@Component({
  selector: 'IL-dr, tr[IL-dr]',
  templateUrl: './body.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./body.component.scss']
})
export class BodyComponent extends ILTableBody {
  constructor() {
    super()
  }
}

