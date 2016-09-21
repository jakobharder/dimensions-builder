import { AbilityData } from './static-abilities';

export class Pack {
    id: number;
    name: string;
    type: PackType;
    wave: number;
    year: number;
    image: string;
    minifigs: number[];
    builds: number[];
    desc: string;
    mustHave: boolean;
    released: boolean;
}

export class Skill {
    id: number;
    name: string;
    desc: string;
    url: string;
    combo: boolean;
    providers: Piece[];
    extra: string;
    characters: Piece[];
    builds: Piece[];

    unimportant: boolean;

    oneId: number;
    twoId: number;

    constructor(data: AbilityData) {
        Object.assign(this, data);
    }

    isUnique() {
        return !this.unimportant && this.providers.length == 1;
    }

    isRare() {
        return !this.unimportant && this.providers.length < 4;
    }
}

export class FilterSkill extends Skill {
    checked: boolean = true;
    fullfilled: boolean = false;
};

export enum PieceType {
    Character,
    Build
}

export class Piece {
    id: number;
    name: string;
    packId: number;
    skills: Skill[];
    skillIds: number[];
    type: PieceType;
    extra: string;
    workInProgress: boolean;
}

export class Minifig extends Piece {
}

export class Vehicle extends Piece {
    vehicleId: number;
    stage: number;
}

declare global {
    interface Array<T> {
        isMember(member: T): boolean;
        getSkills(): number[];
    }
}

Array.prototype.getSkills = function() {
    let a: number[] = [];
    for (let minifig of this) {
        a = a.concat(minifig.skillIds);
    }
    return a;
};

Array.prototype.isMember = function(member: any) {
    for (let item of this) {
        if (item === member) {
            return true;
        }
    }
    return false;
};

export const enum PackType {
    StarterSet,
    StoryPack,
    LevelPack,
    TeamPack,
    FunPack
}
export const packTypeStrings = ['Starter Set', 'Story Pack', 'Level Pack', 'Team Pack', 'Fun Pack'];
