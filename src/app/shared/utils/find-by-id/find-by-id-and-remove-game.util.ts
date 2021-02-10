import { GameDay, GameModel, ResultsModel } from "@sharedModel/index";

export function findByIdAndRemoveGame(gameDayId: string, gameId: string, gameDay: GameDay[] | undefined): ResultsModel | undefined {
    if (!gameDayId || !gameId || !gameDay) return;

    const editableGameDay: GameDay | undefined = gameDay.find((gameDay: GameDay) => {
        return gameDay.id === gameDayId;
    })

    const nonEditTableGameDay: GameDay[] | undefined = gameDay.filter((gameDay: GameDay) => {
        return gameDay.id !== gameDayId;
    })


    if (editableGameDay) {
        const tempGameModel = editableGameDay.games.filter((game: GameModel) => game.id !== gameId);

        if (nonEditTableGameDay && editableGameDay && editableGameDay.id && editableGameDay.date) {
            return { results: [...nonEditTableGameDay, { id: editableGameDay.id, date: editableGameDay.date, games: tempGameModel }] }
        }

        if (!nonEditTableGameDay) {
            return { results: [{ id: editableGameDay.id, date: editableGameDay.date, games: tempGameModel }] }
        }
    }
    return;
}