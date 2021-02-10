
export interface HeaderModel {
    name: string;
    shortName: string;
}

export interface HeaderListModel {
    headers: HeaderModel[];
    totalHeaders?: number;
}