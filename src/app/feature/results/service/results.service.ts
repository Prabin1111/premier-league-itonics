import { Injectable } from '@angular/core';
import { LocalStorageService } from '@coreService/storage-service/local-storage.service';
import { LocalStorageKeys } from '@sharedEnum/index';
import { GameDay, ResultsModel } from '@sharedModel/index';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private _storageService: LocalStorageService) { }

  // getResultList(): Observable<ResultsModel> {
  //   const resultList = this._storageService.get<ResultsModel>(LocalStorageKeys.results);
  //   return of(resultList as ResultsModel);
  // }

  
  getResultList(): Observable<GameDay[]> {
    const resultList = this._storageService.get<GameDay[]>(LocalStorageKeys.results);
    return of(resultList as GameDay[]).pipe(
      map((resultList: GameDay[]) => resultList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()))
  );
  }


}
