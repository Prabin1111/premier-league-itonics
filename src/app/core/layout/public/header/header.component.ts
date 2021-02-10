import { Component, Input, OnInit } from '@angular/core';
import { HeaderListModel } from '@sharedModel/index';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _headerList: HeaderListModel | undefined;

  @Input() 
  set headerList(v: HeaderListModel | undefined ) {
    this._headerList = v;
  }

  get headerList() {
    return this._headerList;
  }
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
