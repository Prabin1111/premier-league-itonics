import { DRAW, GameResult, LOSE, WIN } from "@sharedCustomType/index";
import { GameDay, ResultFormModel, ResultsModel } from "@sharedModel/index";

export function mapToModel(data: ResultFormModel): GameDay | undefined{
    if(!data) return;
    return {
        id: data?.gameDayId,
        date: data?.date,
        games: [
            {
                id: data?.id,
                homeTeam: {
                    teamName: data.homeTeamName,
                    goalScore: data.homeScore,
                    goalAgainst: data.awayScore,
                    gameResult: getGameResult(data.homeScore, data.awayScore),
                },
                awayTeam: {
                    teamName: data.awayTeamName,
                    goalScore: data.awayScore,
                    goalAgainst: data.homeScore,
                    gameResult: getGameResult(data.awayScore, data.homeScore),
                }
            }
        ]
    }

}

function getGameResult(goalScore: number, goalAgainst: number): GameResult {
    if(goalScore > goalAgainst) {
        return WIN;
    } else if (goalScore < goalAgainst) {
        return LOSE;
    } else {
        return DRAW;
    }
}