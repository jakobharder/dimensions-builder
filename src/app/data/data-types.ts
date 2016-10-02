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
    unimportant: boolean;
};

export enum BuilderTag {
    Unique,
    Rare,
    Year2
}

export enum Franchise {
    Dimensions,
    BackToTheFuture,
    TheSimpsons,
    DoctorWho,
    Portal2,
    Ghostbusters,
    MidwayArcade,
    Ninjago,
    ScoobyDoo,
    JurassicWorld,
    DCComics,
    LegoMovie,
    LordOfTheRings,
    TheWizardOfOz,
    Chima,
    Ghostbusters2016,
    MissionImpossible,
    AdventureTime,
    HarryPotter
}

export const franchises: string[] = [
    'Lego Dimensions',
    'Back To The Future',
    'The Simpsons',
    'Doctor Who',
    'Portal 2',
    'Ghostbusters',
    'Midway Arcade',
    'Ninjago',
    'Scooby Doo',
    'Jurassic World',
    'DCComics',
    'Lego Movie',
    'Lord Of The Rings',
    'The Wizard Of Oz',
    'Chima',
    'Ghostbusters 2016',
    'Mission: Impossible',
    'Adventure Time',
    'Harry Potter' 
];

export enum PieceState {
    Done,
    New,
    Incomplete
}

export class PieceData {
    id: number;
    name: string;
    skillIds: number[];
    packId: number;
    image: string;
    url: string;
    state: PieceState;
}

export class MinifigData extends PieceData {
};

export class VehicleData extends PieceData {
    stage: number;
    vehicleId: number;
}
