import { levels, LevelData } from './static-levels';

export class Level extends LevelData {
    next: Level;
    previous: Level;

    constructor(data: LevelData) {
        super();
        Object.assign(this, data);
    }
}

export class Levels {
    list: Level[];
    urlMap: { [url: string] : Level } = null;

    init() {
        this._copyData();
        this._linkLevels();
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
}
