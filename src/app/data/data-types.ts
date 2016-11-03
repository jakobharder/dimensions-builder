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
    image: string;
    extradesc: string;
    type: AbilityType;
    tags: BuilderTag[];
    unimportant: boolean;
    actionClip: string;
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
    'Back to the Future',
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
    'Lord of the Rings',
    'The Wizard of Oz',
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

export class CommentData {
    title: string;
    ids: number[];
}

export class PieceData {
    id: number;
    name: string;
    skillIds: number[];
    packId: number;
    image: string;
    url: string;
    state: PieceState;
    comments: CommentData[];
}

export class MinifigData extends PieceData {
};

export class VehicleData extends PieceData {
    stage: number;
    vehicleId: number;
}
