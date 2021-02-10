export interface ClubModel  {
    name: string;
    ground?:string;
    shortName?:string;
}

export interface ClubsModel {
    clubs: ClubModel[];
    totalClubs:  number;
}