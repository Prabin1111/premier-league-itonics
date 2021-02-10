import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from '@coreService/storage-service/local-storage.service';
import { LocalStorageKeys } from '@sharedEnum/index';
import { HeaderListModel, ResultsModel } from '@sharedModel/index';
import { LeagueTableService } from '@sharedService/league-table/league-table.service';
import { Subscription } from 'rxjs';
import { HeaderService } from './services/header/header.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit, OnDestroy {
  headerList: HeaderListModel | undefined;
  
  subHeaderList: Subscription | undefined;
  subDefaultResults: Subscription | undefined;

  constructor(private _headerService: HeaderService,
    private _storageService: LocalStorageService,
    private _leagueTableService: LeagueTableService) { }

  ngOnInit(): void {
    this.getHeaderList();
    this._leagueTableService.initTable();
  }

  getHeaderList(): void {
    this.subHeaderList = this._headerService.getHeaderList().subscribe((data: HeaderListModel)=> {
      this.headerList = data
    }, error => {
      
    })
  }

  ngOnDestroy() {
    this.subHeaderList?.unsubscribe();
    this.subDefaultResults?.unsubscribe();
  }

}
