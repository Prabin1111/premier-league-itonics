import { GameModel, ResultFormModel } from "@sharedModel/index";

export function mapToForm(data: GameModel, gameDayId:string, date: string ): ResultFormModel | undefined {
    if (!data) return;
    return {
        gameDayId: gameDayId, 
        id: data?.id, 
        homeTeamName: data?.homeTeam?.teamName,
        homeScore: data?.homeTeam?.goalScore,
        awayTeamName: data?.awayTeam?.teamName,
        awayScore: data?.awayTeam?.goalScore,
        date: date,
    }
}

