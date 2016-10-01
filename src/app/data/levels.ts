import { levels, LevelData } from './static-levels';
import { Abilities } from './ability';
import * as Serializer from './../data/serializer';
import { franchises } from './data-types';

export class Level extends LevelData {
    next: Level;
    previous: Level;
    completeAbilities: Abilities;
    finishAbilities: Abilities;
    builderComplete: string;
    builderFinish: string;
    franchiseName: string;

    constructor(data: LevelData) {
        super();
        Object.assign(this, data);
        this.franchiseName = franchises[this.franchise];
    }
}

export class LevelCollection {
    name: string;
    levels: Level[];
    year: number;
    sameFranchise: boolean;
}

export class Levels {
    public list: Level[];
    public urlMap: { [url: string] : Level } = null;

    private data: any;
    private collections: LevelCollection[];

    init(data: any) {
        this.data = data;
        this._copyData();
        this._linkLevels();
        this._checkAbilities();
        this._createCollections();
    }

    getCollections() {
        return this.collections;
    }

    getCollection(name: string) {
        for (let collection of this.collections) {
            if (collection.name === name) {
                return collection;
            }
        }
        return undefined;
    }

    getLevelByAbilities(abilities: string) {
        for (let level of this.list) {
            if (level.builderFinish == abilities || level.builderComplete == abilities) {
                return level;
            }
        }
        return undefined;
    }

    private _copyData() {
        this.urlMap = {};
        this.list = [];
        for (let data of levels) {
            let level = new Level(data);
            if (level.url !== undefined) {
                this.urlMap[level.url] = level;
            }
            this.list.push(level);
        }
    }

    private _linkLevels() {
        // assumes the data is sorted
        let previous: Level = null;
        for (let level of this.list) {
            if (previous !== null) {
                if (previous.story !== level.story) {
                    previous = null;
                } else {
                    previous.next = level;
                    level.previous = previous;
                }
            }
            previous = level;
        }
    }

    private _checkAbilities() {
        for (let level of this.list) {
            let minikitAbilities = new Abilities(this.data.getSkills(level.abilitiesMinikits)).orderByName();
            let rescueAbilities = new Abilities(this.data.getSkills(level.abilitiesRescue)).orderByName();
            let extraAbilities = new Abilities(this.data.getSkills(level.abilitiesExtra)).orderByName();
            level.finishAbilities = new Abilities(this.data.getSkills(level.abilitiesStory)).orderByName();
            let access = this.data.getAbility(level.access);
            if (access !== undefined) {
                level.finishAbilities.add(access);
            }

            level.completeAbilities = minikitAbilities.clone();
            level.completeAbilities.addRange(rescueAbilities);
            level.completeAbilities.addRange(extraAbilities);
            level.completeAbilities.addRange(level.finishAbilities);
            level.completeAbilities.orderByName();

            if (level.completeAbilities.list.length > level.finishAbilities.list.length) {
                level.builderComplete = Serializer.abilitiesToString(level.completeAbilities);
            }
            if (level.finishAbilities.list.length > 1) {
                level.builderFinish = Serializer.abilitiesToString(level.finishAbilities);
            }
        }
    }

    private _createCollections() {
        this.collections = [];

        let collection = undefined;
        for (let level of this.list) {
            if (collection === undefined || collection.name !== level.story) {
                collection = this.getCollection(level.story);
            }
            if (collection === undefined) {
                collection = <LevelCollection>{ name: level.story, levels: [], year: level.year, sameFranchise: true };
                this.collections.push(collection);
            }
            collection.levels.push(level);
            if (collection.levels[0].franchise !== level.franchise) {
                collection.sameFranchise = false;
            }
        }
    }
}
