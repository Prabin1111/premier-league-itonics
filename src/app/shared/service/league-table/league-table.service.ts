import { Injectable } from '@angular/core';
import { HttpClientService } from '@coreService/http-client/http-client.service';
import { LocalStorageService } from '@coreService/storage-service/local-storage.service';
import { DRAW, GameResult, LOSE, MINUS, PLUS, PlusMinus, WIN } from '@sharedCustomType/index';
import { LocalStorageKeys } from '@sharedEnum/index';
import { GameModel, TableModel, TeamMatchStats, TeamStats } from '@sharedModel/index';
import { addPLDGame, minusPLDGame } from '@sharedUtil/get-team-stats/get-team-stats.util';
import { calTOAddGameStats, calToAddTotalPoints, calToMinusGameStats, calToMinusTotalPoints, getTeamStats } from '../../utils';

@Injectable({
  providedIn: 'root'
})
export class LeagueTableService {
  private leagueTable: TeamStats[] | undefined;
  private trackRecallOnce: boolean = false;
  private winPoint = 3;
  private drawPoint = 1;

  constructor(private _storageService: LocalStorageService,
    private _httpClient: HttpClientService) { }

  initTable() {
    if (!this._storageService.checkByKey(LocalStorageKeys.table)) {
      this.getAndSetTable();
    }
  }

  getAndSetTable(calBack?: (table: TeamStats[]) => void): void {
    this._httpClient.get<TableModel>('./table.json').subscribe((data: TableModel) => {
      this._storageService.set(LocalStorageKeys.table, data?.table);
      calBack &&  calBack(data?.table)
    });
  }

  addPoint(data: GameModel | undefined): void {
    this.checkTableAndWorkAsKey(PLUS, data);
  }

  removePoint(data: GameModel | undefined): void {
    this.checkTableAndWorkAsKey(MINUS, data);
  }

  checkTableAndWorkAsKey(key: PlusMinus, data: GameModel | undefined): void {

 

    if (this._storageService.checkByKey(LocalStorageKeys.table)) {
      this.leagueTable = this.getTableList();
      if (data && this.leagueTable) {
        this.addAndRemovePointByKey(key, this.leagueTable, data);
      }
    } else {
      this.getAndSetTable(table => this.addAndRemovePointByKey(key, table, data!));
    }
  }

  getTableList(): TeamStats[] | undefined {
    const tempTableList = this._storageService.get(LocalStorageKeys.table) as TeamStats[];
    if (tempTableList) {
      return tempTableList;
    }
    return undefined
  }

  addAndRemovePointByKey(key: PlusMinus, leagueTable: TeamStats[], data: GameModel): void {
    switch (key) {
      case PLUS:
        this.leagueTable = this.calPointTable(leagueTable,
          data,
          addPLDGame,
          calTOAddGameStats,
          calToAddTotalPoints);
        this.removeAndAddLeagueTable();
        break;

      case MINUS:
        this.leagueTable = this.calPointTable(leagueTable,
          data,
          minusPLDGame,
          calToMinusGameStats,
          calToMinusTotalPoints);
        this.removeAndAddLeagueTable();
        break;

      default:
        break;
    }
  }

  calPointTable(
    leagueTable: TeamStats[],
    data: GameModel,
    calGamePlayed: (gamePlayed: number) => number,
    calGameStats: (resultFor: GameResult, oldResult: number, currentResult: GameResult) => number,
    calTotalPoints: (oldPts: number, currentResult: GameResult) => number
  ): TeamStats[] {
    return leagueTable.map((team: TeamStats) => {
      if (team.name === data.homeTeam.teamName) {
        return getTeamStats(team, data.homeTeam, calGamePlayed, calGameStats, calTotalPoints)
      }
      if (team.name === data.awayTeam.teamName) {
        return getTeamStats(team, data.awayTeam, calGamePlayed, calGameStats, calTotalPoints)
      }
      return team;
    })
  }

  removeAndAddLeagueTable(): void {
    this._storageService.removeBy(LocalStorageKeys.table);
    this._storageService.set(LocalStorageKeys.table, this.leagueTable);
  }
}