import { Injectable } from '@angular/core';
import { GameModel, ResultFormModel } from '@sharedModel/index';

@Injectable({
  providedIn: 'root'
})
export class DataBusService {

  constructor() { }

  private _dataStatus: boolean = false;
  private _oldGameDetails: GameModel | undefined;
  private _gameDetails: ResultFormModel | undefined;

  get upDateStatus(): boolean {
    return this._dataStatus;
  }

  set upDateStatus(v: boolean) {
    this._dataStatus = v;
  }


  get gameDetails() {
    return this._gameDetails;
  }

  set gameDetails(v: ResultFormModel | undefined) {
    this._gameDetails = v;
  }

  get oldGameDetails() {
    return this._oldGameDetails;
  }

  set oldGameDetails(v: GameModel | undefined) {
    this._oldGameDetails = v;
  }
}
