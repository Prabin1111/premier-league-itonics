import { GameDay, ResultsModel } from "@sharedModel/index";

export function 
findByDate(date: string | undefined , games : GameDay[] | undefined): GameDay | undefined {
    if(!games || !date) return;

    return games.find( (gameDay ) => gameDay.date == date )
}