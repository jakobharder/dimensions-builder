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
            if (!this.contains(ability)) {
                this.list.push(ability);
            }
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

    getOrdered() {
        return new AbilitiesOrdered(this);
    }

    orderByName() {
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

    orderByRarity() {
        return new AbilitiesOrdered(this).byRarity();
    }

    getFilteredByCombo(combo: boolean) {
        let newlist = []; 
        for (let item of this.list) {
            if (item.combo == combo) {
                newlist.push(item);
            }
        }
        return new Abilities(newlist);
    }

    getRare() {
        let newlist = [];
        for (let item of this.list) {
            if (item.providers.length < 4) {
                newlist.push(item);
            }
        }
        return new Abilities(newlist);
    }
}

export class AbilitiesOrdered extends Abilities {
    constructor(abilities: Abilities) {
        super(abilities.clone().list);
    }

    byRarity() {
        this.list.sort(function(a, b) {
            return a.providers.length - b.providers.length;
        });
        return this;
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
