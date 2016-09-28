import { Piece, PieceType, Vehicle, Minifig, Skill } from './data';
import { Abilities } from './ability';

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

    getBuilds() {
        let builds: Vehicle[] = [];
        for (let piece of this.list) {
            if (piece.type === PieceType.Build) {
                builds.push(piece as Vehicle);
            }
        }
        return builds;
    }

    getCharacters() {
        let characters: Minifig[] = [];
        for (let piece of this.list) {
            if (piece.type === PieceType.Character) {
                characters.push(piece as Minifig);
            }
        }
        return characters;
    }

    getAbilities() {
        let abilities: Skill[] = [];
        for (let piece of this.list) {
            for (let ability of piece.skills) {
                if (-1 === abilities.indexOf(ability)) {
                    abilities.push(ability);
                }
            }
        }
        return new Abilities(abilities);
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
