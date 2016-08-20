import { Piece } from './data';

export class Pieces {
    list: Piece[];

    constructor(pieces: Piece[]) {
        this.list = pieces;
    }

    clone() {
        let clone = new Pieces([]);
        clone.addRange(this);
        return clone;
    }

    addRange(pieces: Pieces) {
        for (let piece of pieces.list) {
            this.list.push(piece);
        }
    }

    getOrdered() {
        return new PiecesOrdered(this);
    }
}

export class PiecesOrdered {
    list: Piece[];

    constructor(pieces: Pieces) {
        this.list = pieces.clone().list;

    }

    byName() {
        this.list.sort(function(a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        return this;
    }
}
