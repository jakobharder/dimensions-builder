import { Abilities } from './ability';

let _Rixits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
let _bits = 30;

export function abilitiesToString(abilities: Abilities) {
    let numbers = [0, 0, 0, 0, 0]; // 32bit per number
    for (let skill of abilities.list) {
        numbers[(skill.id - skill.id % _bits) / _bits] |= 1 << (skill.id % _bits);
    }
    let output = "";
    for (let n of numbers) {
        output += fromNumber(n);
    }
    return output;
}

export function stringToAbilities(query: string) {
    let abilities: number[] = [];
    let strings = query.match(/.{5}/g);

    let j = 0;
    for (let s of strings) {
        let n: number = toNumber(s);
        for (let k = 0; n > 0; k++) {
            if ((n % 2) == 1) {
                abilities.push(j * _bits + k);
            }
            n = n >> 1;
        }
        j++;
    }

    return abilities;
}

function fromNumber(number: number) {
    if (isNaN(Number(number)) || number === null ||
        number === Number.POSITIVE_INFINITY)
        throw "The input is not valid";
    if (number < 0)
        throw "Can't represent negative numbers now";

    var rixit; // like 'digit', only in some non-decimal radix 
    var residual = Math.floor(number);
    var result = '';
    while (true) {
        rixit = residual % 64
        // console.log("rixit : " + rixit);
        // console.log("result before : " + result);
        result = _Rixits.charAt(rixit) + result;
        // console.log("result after : " + result);
        // console.log("residual before : " + residual);
        residual = Math.floor(residual / 64);
        // console.log("residual after : " + residual);

        if (residual == 0)
            break;
    }
    return new Array(6 - result.length).join('0') + result;
};

function toNumber(rixit: string) {
    var result = 0;
    // console.log("rixits : " + rixits);
    // console.log("rixits.split('') : " + rixits.split(''));
    let rixits = rixit.split('');
    for (var e = 0; e < rixits.length; e++) {
        // console.log("_Rixits.indexOf(" + rixits[e] + ") : " + 
            // this._Rixits.indexOf(rixits[e]));
        // console.log("result before : " + result);
        result = (result * 64) + _Rixits.indexOf(rixits[e]);
        // console.log("result after : " + result);
    }
    return result;
};
