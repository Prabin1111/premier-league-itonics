import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  private _pageTitle: string | undefined;
  @Input() 
  set pageTitle(v: string | undefined ) {
    this._pageTitle = v;
  }

  get pageTitle() {
    return this._pageTitle;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
