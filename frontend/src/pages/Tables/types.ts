export type RecordsResponse = {
    data: RecordItem[];
    results: number;
}

export type RecordItem = {
    genreName: string,
    gameTitle: string,
    gamePlatform: 'XBOX' | 'PLAYSTATION' | 'PC',
    name: string,
    age: number,
    moment: string
}