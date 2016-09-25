export enum AbilityType {
    Normal,
    Combo,
    Alternative,
    LocationAccess
}

export class AbilityData {
    id: number;
    name: string;
    desc: string;
    url: string;
    type: AbilityType;
    tags: BuilderTag[];
};

export enum BuilderTag {
    Unique,
    Rare,
    Year2
}