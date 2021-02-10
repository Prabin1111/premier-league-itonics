import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameDay, GameModel } from '@sharedModel/index';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  private _resultList: GameDay[] | undefined;

  @Output() update = new EventEmitter<{ game: GameModel,gameDayId: string, date: string }>()

  @Input()
  set resultList(v: GameDay[] | undefined) {
    this._resultList = v;
  }

  get resultList() {
    return this._resultList;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(game: GameModel, gameDayId:string, date: string): void {
    this.update.emit({ game, gameDayId, date })
  }


  haveGame(result: GameDay ): boolean {
    if(result?.games?.length > 0) {
      return true;
    }
    return false;
  }

}
