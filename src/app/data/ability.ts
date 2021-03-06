import { Skill } from './data';
import { AbilityType } from './data-types';

export class Abilities {
    list: Skill[];
    title: string;

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
        for (let item of this.list) {
            if (item.id === skill.id) {
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

    getWithoutHidden() {
        let newlist = []; 
        for (let item of this.list) {
            if (item.url !== null) {
                newlist.push(item);
            }
        }
        return new Abilities(newlist);        
    }

    getFilteredByType(type: AbilityType) {
        let newlist = []; 
        for (let item of this.list) {
            if (item.type === type) {
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

    getYear2() {
        let newlist = [];
        for (let item of this.list) {
            if (item.isYear2()) {
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
