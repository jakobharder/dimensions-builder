import { levels, LevelData } from './static-levels';

export class Level extends LevelData {
    constructor(data: LevelData) {
        super();
        Object.assign(this, data);
    }
}

export class Levels {
    list: Level[];
    urlMap: { [url: string] : Level } = null;

    init() {
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
}
