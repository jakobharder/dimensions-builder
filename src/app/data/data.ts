
export class Pack {
    id: number;
    name: string;
    type: PackType;
    wave: number;
    year: number;
    image: string;
    minifigs: number[];
}

export class Skill {
    id: number;
    name: string;
    desc: string;
    providers: Minifig[];
}

export class Minifig {
    id: number;
    name: string;
    packId: number;
    skills: Skill[];
    skillIds: number[];
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
    for (let i of this) {
        if (i === member) {
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

/* 
wave 1 09/27/2015
Wave 2 (11/03/2015)
Wave 3 (01/19/2016)
Wave 4 (03/15/2016)
Wave 5 (05/10/2016)
*/