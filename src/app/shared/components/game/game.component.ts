import { Component, Input, OnInit } from '@angular/core';
import { GameResult, WIN} from '@sharedCustomType/index';
import { GameModel } from '@sharedModel/index';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private _game: GameModel | undefined;
  @Input() 
  set game (v: GameModel | undefined) {
    this._game = v;
  }

  get game() {
    return this._game;
  }
  constructor() { }

  ngOnInit(): void {
  }

  isWinner(result:GameResult ): string {
    if(result === WIN) {
      return 'game__winner';
    }
    return '';
  }
}
