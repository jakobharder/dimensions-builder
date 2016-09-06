import { levels, LevelData } from './static-levels';

export class Levels {
    list: LevelData[];
    urlMap: { [url: string] : LevelData } = null;

    init() {
        this.urlMap = {};
        this.list = [];
        for (let data of levels) {
            let level = Object.assign({}, data);
            if (level.url !== undefined) {
                this.urlMap[level.url] = level;
            }
            this.list.push(level);
        }
    }
}