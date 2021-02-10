import { Component, OnInit } from '@angular/core';
import { TeamStats } from '@sharedModel/index';
import { LeagueTableService } from '@sharedService/league-table/league-table.service';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.scss']
})
export class LeagueTableComponent implements OnInit {
  leagueTable: TeamStats[] | undefined;
  totalGame = 38;
  pageTitle = "League Title"
  displayedColumns: String[] = ['SN', 'Team Name', 'PLD', "W", "D", "L", "Pts"]

  constructor(private _LeagueTableService: LeagueTableService) { }

  ngOnInit(): void {
    this.initTable();
    this.getTableList();
  }

  getTableList(): void {
    this.leagueTable = this._LeagueTableService.getTableList()?.sort((a, b) => b.Pts - a.Pts);
  }

  initTable(): void {
    this._LeagueTableService.initTable();
  }

  haveTableData(): boolean {
    if (this.leagueTable && this.leagueTable.length > 0) {
      return true;
    }
    return false;
  }


  isChampion(index: number): string {
    if (this.leagueTable && this.leagueTable.length > 0) {
      const allGamePlayed = this.leagueTable.every((teamStats: TeamStats) => {
        teamStats.PLD === this.totalGame
      })
      return (allGamePlayed && index === 1) ? 'C' : '';
    }
    return '';
  }

}
