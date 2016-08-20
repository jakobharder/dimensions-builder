import { Skill } from './data';

export class Abilities {
    list: Skill[];

    constructor(skills: Skill[]) {
        this.list = skills;
    }

    clone() {
        let clone = new Abilities([]);
        clone.addRange(this);
        return clone;
    }

    add(skill: Skill) {
        this.list.push(skill);
    }

    addRange(abilities: Abilities) {
        for (let ability of abilities.list) {
            this.list.push(ability);
        }
    }

    removeRange(abilities: Abilities) {
        let newlist: Skill[] = [];
        for (let ability of this.list) {
            if (!abilities.contains(ability)) {
                newlist.push(ability);
            }
        }
        this.list = newlist;
    }

    contains(skill: Skill) {
        for (let i of this.list) {
            if (i.id === skill.id) {
                return true;
            }
        }

        return false;
    }

    ids() {
        let ids: number[] = [];
        for (let ability of this.list) {
            ids.push(ability.id);
        }
        return ids;
    }
}
