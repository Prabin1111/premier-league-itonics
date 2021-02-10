import { Injectable } from '@angular/core';
import { HttpClientService } from '@coreService/http-client/http-client.service';
import { ClubsModel, GameDay, GameModel, ResultFormModel, ResultsModel } from '@sharedModel/index';
import { Observable } from 'rxjs';
import { UUIDService } from '@sharedService/UU-id/uuid.service';
import { LocalStorageService } from '@coreService/storage-service/local-storage.service';
import { LocalStorageKeys } from '@sharedEnum/index';
import { findByDate, findByIdAndRemoveGame, mapToModel } from 'src/app/shared/utils';
import { LeagueTableService } from '@sharedService/league-table/league-table.service';
import { DataBusService } from '@sharedService/data-bus/data-bus.service';

@Injectable({
  providedIn: 'root'
})
export class NewResultService {
  resultList: GameDay[] | undefined = [];
  mappedModelData: GameDay | undefined;
  gameDay: GameDay | undefined;

  constructor(private _httpClient: HttpClientService,
    private _UUIDService: UUIDService,
    private _storageService: LocalStorageService,
    private _leagueTableService: LeagueTableService,
    private _dataService: DataBusService) { }

  getClubList(): Observable<ClubsModel> {
    return this._httpClient.get<ClubsModel>('./clubs.json');
  }

  getResultList(): void {
    const results = this._storageService.get<GameDay[]>(LocalStorageKeys.results) as GameDay[];
    if (results) {
      this.resultList = results;
    }
  }

  saveNewResult(dataForm: ResultFormModel): void {
    this.getResultList();
    if (dataForm && dataForm?.id && dataForm?.gameDayId) {
      this.updateResult(mapToModel(dataForm));
    } else {
      this.addNewResult(dataForm);
    }
  }

  addNewResult(data: ResultFormModel): void {
    data.id = this._UUIDService.generateUUID();
    data.gameDayId = this._UUIDService.generateUUID();
    if (data?.id && data?.gameDayId) {
      this.mappedModelData = mapToModel(data);
      this.addToList(findByDate(this.mappedModelData?.date, this.resultList));
    }
  }

  addToList(gameDay: GameDay | undefined): void {
    if (this.mappedModelData && this.mappedModelData?.games[0]) {
      this.addPointToTable(this.mappedModelData?.games[0]);
      if (gameDay) {
        const game: GameModel = this.mappedModelData?.games[0] as GameModel;
        gameDay.games.push(game);
      } else {
        const games: GameDay = this.mappedModelData as GameDay;
        this.resultList?.push(games);
      }
      this.removeAndAddResultList();
    }

  }

  updateResult(data: GameDay | undefined): void {
    if (data) {
      this.mappedModelData = data;
      const deletedGame: ResultsModel = findByIdAndRemoveGame(data.id, data.games[0].id, this.resultList) as ResultsModel;
      this.resultList = deletedGame.results;
      this.removePointFromTable();
      this.addToList(findByDate(data.date, this.resultList));
    }
  }

  removeAndAddResultList(): void {
    this._storageService.removeBy(LocalStorageKeys.results);
    this._storageService.set(LocalStorageKeys.results, this.resultList);
  }

  addPointToTable(game: GameModel): void {
    this._leagueTableService.addPoint(game);
  }

  removePointFromTable(): void {
    this._leagueTableService.removePoint(this._dataService.oldGameDetails);
    this._dataService.oldGameDetails = undefined;
  }
}
