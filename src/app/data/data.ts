import { AbilityData, AbilityType, BuilderTag, PieceState, CommentData } from './data-types';
import { Level } from './levels';
import { Abilities } from './ability';

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
    amazon: string;
    access: Level[];
    exclusiveAccess: boolean;

    get mustBuy(): boolean {
        return this.mustHave || this.exclusiveAccess;
    }

    hasExclusiveAccess() {
        return this.exclusiveAccess;
    }
}

export class Skill {
    id: number;
    name: string;
    desc: string;
    url: string;
    image: string;
    video: boolean;
    extradesc: string;
    type: AbilityType;
    providers: Piece[];
    extra: string;
    characters: Piece[];
    builds: Piece[];
    tags: BuilderTag[];
    levels: Level[];
    actionClip: string;

    unimportant: boolean;

    oneId: number;
    twoId: number;

    constructor(data: AbilityData) {
        Object.assign(this, data);
    }

    isUnique() {
        return !this.unimportant && this.type !== AbilityType.LocationAccess && this.providers.length == 1;
    }

    isRare() {
        return !this.unimportant && this.type !== AbilityType.LocationAccess && this.providers.length < 4;
    }

    isYear2() {
        return this.tags.indexOf(BuilderTag.Year2) !== -1;
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
    image: string;
    url: string;
    isYear2: boolean;
    state: PieceState;
    comments: CommentData[];
    video: string;

    locationAccess: Skill[];

    getGroupedAbilities() {
        let groups: Abilities[] = [];
        groups.push(new Abilities(this.skills));
        groups[0].title = this.name + '\'s Abilities';

        let abilities = new Abilities([]);
        abilities.title = 'Relevant Combos';
        for (let ability of groups[0].list) {
            if (ability.type === AbilityType.Combo) {
                abilities.add(ability);
            }
        }
        if (abilities.list.length > 0) {
            groups[0].removeRange(abilities);
            groups.push(abilities);
        }

        let index = groups.length;
        if (this.comments) {
            console.log(this.comments);
            for (let comment of this.comments) {
                groups.push(new Abilities([]));
                groups[index].title = comment.title;
                for (let ability of groups[0].list) {
                    if (-1 !== comment.ids.indexOf(ability.id)) {
                        groups[index].add(ability);
                    }
                }
                groups[0].removeRange(groups[index]);
                index ++;            
            }
        }

        abilities = new Abilities([]);
        abilities.title = 'Location Access';
        for (let ability of groups[0].list) {
            if (ability.type === AbilityType.LocationAccess) {
                abilities.add(ability);
            }
        }
        groups[0].removeRange(abilities);
        groups.push(abilities);

        return groups;
    }
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
