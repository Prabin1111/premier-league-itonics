import { Injectable } from '@angular/core';
import { HttpClientService } from '@coreService/http-client/http-client.service';
import { HeaderListModel } from '@sharedModel/index';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private _httpClientService: HttpClientService) { }

  getHeaderList(): Observable<HeaderListModel> {
    return this._httpClientService.get<HeaderListModel>('/header-list.json');
  }
}
