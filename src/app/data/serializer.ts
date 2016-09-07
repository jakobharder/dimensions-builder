import { Abilities } from './ability';

export class Serializer {
    abilitiesToString(abilities: Abilities) {
        let output = "";
        for (let skill of abilities.list) {
            if (skill.id < 25) {
                output += String.fromCharCode(skill.id + 65);
            } else if (skill.id < 50) {
                output += String.fromCharCode(skill.id + 97 - 25);
            } else {
                // TODO
            }
        }
        return output;
    }

    stringToAbilities(query: string) {
        let abilities: number[] = [];
        for (let i = 0; i < query.length; i++) {
            let char = query.charCodeAt(i);
            if (char >= 65 && char <= 90) {
                abilities.push(char - 65);
            } else if (char >= 97 && char <= 122) {
                abilities.push(char - 97 + 25);
            } else {
                // TODO
            }
        }
        return abilities;
    }
}
