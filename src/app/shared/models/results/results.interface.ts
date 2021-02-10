import { GameResult } from '@sharedCustomType/index';

export interface TeamMatchStats {
    teamName: string;
    goalScore: number;
    goalAgainst: number;
    gameResult: GameResult;
}

export interface GameModel {
    id: string;
    teamVS?: string;
    homeTeam: TeamMatchStats;
    awayTeam:TeamMatchStats;
}

export interface GameDay {
    id:string;
    date: string;
    games: GameModel[];
}

export interface ResultsModel {
    results: GameDay[];
}