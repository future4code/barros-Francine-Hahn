export enum country {
    USA = "USA",
    BRAZIL = "BRAZIL"
}

export enum nationality {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

export interface Casino {
    name: string,
    country: country
}

export interface UserCasino {
    name: string,
    age: number,
    nationality: nationality
}
