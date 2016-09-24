import { levels, LevelData } from './static-levels';

export class Level extends LevelData {
    next: Level;
    previous: Level;

    constructor(data: LevelData) {
        super();
        Object.assign(this, data);
    }
}

export class LevelCollection {
    name: string;
    levels: Level[];
}

export class Levels {
    public list: Level[];

    private urlMap: { [url: string] : Level } = null;
    private collections: LevelCollection[];

    init() {
        this._copyData();
        this._linkLevels();
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

    private _createCollections() {
        this.collections = [];

        let collection = undefined;
        for (let level of this.list) {
            if (collection === undefined || collection.name !== level.story) {
                collection = this.getCollection(level.story);
            }
            if (collection === undefined) {
                collection = <LevelCollection>{ name: level.story, levels: [] };
                this.collections.push(collection);
            }
            collection.levels.push(level);
        }
    }
}
