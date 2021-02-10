import { DRAW, GameResult, LOSE, WIN } from "@sharedCustomType/index";
import { TeamMatchStats, TeamStats } from "@sharedModel/index";

export function getTeamStats(
  team: TeamStats, 
  data: TeamMatchStats,
  calGamePlayed: (playedGame: number) => number, 
  getResultAsRequested: (resultFor: GameResult, oldResult: number, currentResult: GameResult) =>  number,
  getPointsResult: (oldPts: number, currentResult: GameResult) => number
  ): TeamStats {
    return {
      name: team.name,
      PLD: calGamePlayed(team.PLD),
      W: getResultAsRequested(WIN, team.W, data.gameResult),
      L: getResultAsRequested(LOSE, team.L, data.gameResult),
      D: getResultAsRequested(DRAW, team.D, data.gameResult),
      Pts: getPointsResult(team.Pts, data.gameResult)
    }
  }


  export function  calToAddTotalPoints(oldPts: number, currentResult: GameResult): number {
    if (currentResult === WIN) {
      return oldPts + 3;
    }
    if (currentResult === DRAW) {
      return oldPts + 1;
    }
    return oldPts;
  }

  export function  calToMinusTotalPoints(oldPts: number, currentResult: GameResult): number {
    if (currentResult === WIN) {
      return oldPts - 3;
    }
    if (currentResult === DRAW) {
      return oldPts - 1;
    }
    return oldPts;
  }


  
  export function calTOAddGameStats(resultFor: GameResult, oldResult: number, currentResult: GameResult) : number {
    return (currentResult === resultFor) ? ++oldResult : oldResult;
  }

  export function calToMinusGameStats(resultFor: GameResult, oldResult: number, currentResult: GameResult) : number {
    return (currentResult === resultFor) ? --oldResult : oldResult;
  }

  export function addPLDGame(gamePlayed: number): number {
    return ++gamePlayed;
  }

  export function minusPLDGame(gamePlayed: number): number {
    return --gamePlayed;
  }

