import { Injectable } from '@angular/core';
import { Pack, Piece, PieceType, Minifig, Vehicle, Skill } from './data';
import { Abilities } from './ability';
import { Pieces } from './piece';
import { minifigs, vehicles, skills, packs, VehicleData } from './static-data';

@Injectable()
export class DataService {
    packMap: { [id: number] : Pack; } = null;
    minifigMap: { [id: number] : Minifig; } = null;
    minifigs: Minifig[];
    skillMap: { [id: number] : Skill; } = null;
    skills: Skill[];
    urlToAbility: { [url: string] : Skill } = null;



    constructor() {
        this.ensureLoaded();
    }

    ensureLoaded() {
        if (this.packMap === null) {
            this.packMap = {};
            for (let pack of packs) {
                let p = Object.assign({}, pack);
                p.minifigs = [];
                if (pack.id in this.packMap) {
                    console.log('pack ' + pack.id + ' is already in packMap');
                }
                this.packMap[pack.id] = p;
            }

            this.skillMap = {};
            this.urlToAbility = {};
            this.skills = [];
            for (let data of skills) {
                let skill = Object.assign({}, data);
                skill.providers = [];
                this.skillMap[skill.id] = skill;
                if (skill.url !== undefined) {
                    this.urlToAbility[skill.url] = skill;
                }
                this.skills.push(skill);
            }

            this.minifigMap = {};
            this.minifigs = [];
            for (let data of minifigs) {
                let minifig: Minifig = Object.assign({}, data);
                minifig.type = PieceType.Character;
                minifig.skills = this.getSkills(data.skillIds);
                for (let skill of minifig.skills) {
                    skill.providers.push(minifig);
                }

                let pack = this.packMap[minifig.packId];
                if (pack !== undefined) {
                    pack.minifigs.push(minifig.id);
                } else {
                    console.log('cannot find pack ' + minifig.packId);
                }

                this.minifigMap[minifig.id] = minifig;
                this.minifigs.push(minifig);
            }

            let mergedBuilds = this.mergeBuilds();
            for (let data of mergedBuilds) {
                let vehicle: Vehicle = Object.assign({}, data);
                vehicle.type = PieceType.Build;
                vehicle.skills = this.getSkills(data.skillIds);
                for (let skill of vehicle.skills) {
                    skill.providers.push(vehicle);
                }
            }

            for (let ability of this.skills) {
                ability.providers = new Pieces(ability.providers).getOrdered().byName().list;
            }
        }
    }

    getPack(id: number) {
        return this.packMap[id];
    }

    getAllPacks() {
        return packs;
    }

    getMinifig(id: number) {
        return this.minifigMap[id];
    }

    getMinifigs(ids: number[]) {
        let a: Minifig[] = [];
        for (let id of ids) {
            if (id in this.minifigMap) {
                a.push(this.minifigMap[id]);
            }
        }
        return a;
    }

    getAllMinifigs() {
        return this.minifigs;
    }

    getAbility(id: number) {
        return this.skillMap[id];
    }

    getAbilityByUrl(url: string) {
        return this.urlToAbility[url];
    }

    getSkills(ids: number[]) {
        let a: Skill[] = [];
        for (let id of ids) {
            if (id in this.skillMap) {
                a.push(this.skillMap[id]);
            }
        }
        return a;
    }

    getAllSkills() {
        return this.skills;
    }

    getMainAbilities(except: Abilities) {
        let result = new Abilities(this.getSkills([25, 46, 32, 36, 35, 31, 37, 38, 42, 50]));
        if (except !== null) {
            result.removeRange(except);
        }
        return result;
    }

    getImportantAbilities(except: Abilities) {
        let result = new Abilities(this.getSkills([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 33, 39, 40, 41, 43, 44, 45, 51, 52, 53, 54, 55, 56]));
        if (except !== null) {
            result.removeRange(except);
        }
        return result;
    }

    getUniqueAbilities(except: Abilities) {
        let result = new Abilities([]);
        for (let skill of this.skills) {
            if (skill.providers.length == 1 && except !== null && !except.contains(skill)) {
                result.add(skill);
            }
        }
        return result;
    }

    getAbilities(except: Abilities) {
        let result = new Abilities(this.getAllSkills());
        if (except !== null) {
            result.removeRange(except);
        }
        return result;
    }

    getAbilityCombos(except: Abilities) {
        let result = new Abilities(this.getSkills([1001, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019]));
        if (except !== null) {
            result.removeRange(except);
        }
        return result;
    }

    private unionArrays(a: number[], b: number[]) {
        let result: number[] = [].concat(a);
        for (let i of b) {
            if (!result.includes(i)) {
                result.push(i);
            }
        }
        return result;
    }

    private mergeBuilds() {
        let result: VehicleData[] = [];
        let one: VehicleData, two: VehicleData;
        for (let vehicle of vehicles) {
            if (one === undefined) {
                one = vehicle;
                continue;
            } else if (two === undefined) {
                two = vehicle;
                continue;
            } else {
                let newBuild = new VehicleData;
                newBuild.id = one.vehicleId;
                newBuild.name = one.name;
                newBuild.image = one.image;
                newBuild.packId = one.packId;
                newBuild.stage = 0;
                newBuild.vehicleId = one.vehicleId;
                newBuild.skillIds = this.unionArrays(this.unionArrays(one.skillIds, two.skillIds), vehicle.skillIds);
                result.push(newBuild);

                one = undefined;
                two = undefined;
            }
        }
        return result;
    }
}
