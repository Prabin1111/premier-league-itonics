import { Component, OnInit } from '@angular/core';
import { RouteConstant } from '@sharedConstant/index';
import { GameDay, GameModel, ResultsModel } from '@sharedModel/index';
import { DataBusService } from '@sharedService/data-bus/data-bus.service';
import { NavigationService } from '@sharedService/navigation/navigation.service';
import { mapToForm } from 'src/app/shared/utils';
import { ResultsService } from './service/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  pageTitle = 'Results';

  resultList: GameDay[] | undefined;

  constructor(private _resultsService: ResultsService,
    private _navigationService: NavigationService,
    private _dataBusService: DataBusService) { }

  ngOnInit(): void {
    this.getResultData();
  }

  getResultData() {
    this._resultsService.getResultList().subscribe((data: GameDay[]) => {
      this.resultList =  data;
    }, error => {

    })
  }

  updateGameDetail(data: {game: GameModel,gameDayId: string,  date: string}): void {
      this._dataBusService.upDateStatus = true;
      this._dataBusService.oldGameDetails = data.game;
      this._dataBusService.gameDetails = mapToForm(data.game, data.gameDayId, data.date);
      this._navigationService.navigateTo(RouteConstant.newResultRoute)
  }
}
