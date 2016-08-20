import { Minifig, Vehicle, Piece, Skill } from './data';

export class MinifigList {
    list: Piece[] = [];
    skills: number[] = [];

    clear() {
        this.list = [];
        this.skills = [];
    }

    add(fig: Piece) {
        this.list.push(fig);

        this._updateSkills();
    }

    remove(fig: Piece) {
        let index = this.list.indexOf(fig);
        if (index !== -1) {
            this.list.splice(index, 1);
        }

        this._updateSkills();
    }

    contains(fig: Piece) {
        return (-1 !== this.list.indexOf(fig));
    }

    get() {
        return this.list;
    }

    getSkills() {
        return this.skills;
    }

    private _updateSkills() {
        this.skills = [];

        // TODO should be insert sort
        for (let fig of this.list) {
            for (let skill of fig.skillIds) {
                if (-1 === this.skills.indexOf(skill)) {
                    this.skills.push(skill);
                }
            }
        }
    }
}
