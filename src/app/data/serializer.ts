import { Abilities } from './ability';

let rixit = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

export function abilitiesToString(abilities: Abilities) {
    let output = "";
    for (let skill of abilities.list) {
        if (skill.id < 64) {
            output += this.rixit.charAt(skill.id);
        } else {
            // TODO
        }
    }
    return output;
}

export function stringToAbilities(query: string) {
    let abilities: number[] = [];
    for (let i = 0; i < query.length; i++) {
        let index = this.rixit.indexOf(query.charAt(i));
        if (index != -1) {
            abilities.push(index);
        } else {
            // TODO
        }
    }
    return abilities;
}
