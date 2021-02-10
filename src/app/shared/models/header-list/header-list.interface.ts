
export interface HeaderModel {
    title: string;
    path: string;
}

export interface HeaderListModel {
    headers: HeaderModel[];
    totalHeaders?: number;
}