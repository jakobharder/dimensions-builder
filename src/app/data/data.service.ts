import { Injectable } from '@angular/core';
import { Pack, Piece, PieceType, Minifig, Vehicle, Skill } from './data';
import { Abilities } from './ability';
import { Pieces } from './piece';
import { packs } from './static-data';
import { minifigs } from './static-characters';
import { vehicles } from './static-vehicles';
import { Levels } from './levels';
import { Ability, abilities } from './static-abilities';
import { Wave } from './wave';
import { waves } from './static-waves';
import { AbilityType, VehicleData } from './data-types';

@Injectable()
export class DataService {
    packs: Pack[];
    packMap: { [id: number] : Pack; } = null;
    minifigMap: { [id: number] : Minifig; } = null;
    minifigs: Minifig[];
    urlToCharacter: { [url: string] : Minifig } = null;
    skillMap: { [id: number] : Skill; } = null;
    skills: Skill[];
    urlToAbility: { [url: string] : Skill } = null;
    levels: Levels;
    waves: Wave[];
    waveMap: { [wave: number] : Wave; } = null;

    buildMap: { [id: number] : Vehicle; } = null;
    builds: Vehicle[];

    constructor() {
        this.ensureLoaded();
    }

    ensureLoaded() {
        if (this.packMap === null) {
            this._initWaves();
            this._initPacks();

            this.skillMap = {};
            this.urlToAbility = {};
            this.skills = [];
            for (let data of abilities) {
                let skill = new Skill(data);
                skill.providers = [];
                this.skillMap[skill.id] = skill;
                if (skill.url !== undefined) {
                    this.urlToAbility[skill.url] = skill;
                }
                this.skills.push(skill);
            }

            this._initCharacters();
            this._initBuilds();

            for (let ability of this.skills) {
                ability.providers = new Pieces(ability.providers).getOrdered().byName().list;
                if (ability.isUnique()) {
                    ability.extra = "unique";
                    ability.providers[0].extra = "unique";
                    this.packMap[ability.providers[0].packId].mustHave = true;
                } else if (ability.isRare()) {
                    ability.extra = "rare";
                }
                else {
                    ability.extra = "";
                }

                if (!ability.unimportant) {
                    let thisPack = false;
                    for (let provider of ability.providers) {
                        thisPack = provider.packId == ability.providers[0].packId;
                        if (!thisPack) {
                            break;
                        }
                    }
                    if (thisPack) {
                        this.packMap[ability.providers[0].packId].mustHave = true;
                    }
                }

                ability.characters = new Pieces(ability.providers).getCharacters();
                ability.builds = new Pieces(ability.providers).getBuilds();
            }

            this._initLevels();
        }
    }

    getPack(id: number) {
        return this.packMap[id];
    }

    getAllPacks() {
        return packs;
    }

    getWaves() {
        return this.waves;
    }

    getWave(id: number) {
        return this.waveMap[id];
    }

    getMinifig(id: number) {
        return this.minifigMap[id];
    }

    getCharacterByUrl(url: string) {
        return this.urlToCharacter[url];
    }

    getMinifigs(ids: number[]) {
        let a: Piece[] = [];
        for (let id of ids) {
            if (id in this.minifigMap) {
                a.push(this.minifigMap[id]);
            }
        }
        return a;
    }

    getBuilds(ids: number[]) {
        let a: Piece[] = [];
        for (let id of ids) {
            if (id in this.buildMap) {
                a.push(this.buildMap[id]);
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
        let result = new Abilities(this.getSkills([Ability.DivePlusDigging, Ability.DivePlusBoomerang, Ability.DivePlusChi, Ability.DivePlusDrone, 
        Ability.DivePlusGhostImmunity, Ability.DivePlusGrapple, Ability.DivePlusHacking, Ability.DivePlusHazardCleaner, Ability.DivePlusLaser, 
        Ability.DivePlusMini, Ability.DivePlusSilverDestroy, Ability.DivePlusSonarSmash, Ability.DivePlusSuperStrength, Ability.DivePlusTarget, 
        Ability.DivePlusTechnology, Ability.DivePlusTracking, Ability.DivePlusXRay, Ability.FlightPlusLaser]));
        if (except !== null) {
            result.removeRange(except);
        }
        return result;
    }

    getAbilityAccess(except: Abilities) {
        let result: Abilities = new Abilities([]);
        for (let ability of this.skills) {
            if (ability.type === AbilityType.LocationAccess) {
                result.add(ability);
            }
        }
        if (except !== null) {
            result.removeRange(except);
        }
        return result;        
    }

    getLevels() {
        return this.levels;
    }

    getLevel(url: string) {
        return this.levels.urlMap[url];
    }

    private unionArrays(a: number[], b: number[]) {
        let result: number[] = [].concat(a);
        for (let index of b) {
            if (result.indexOf(index) == -1) {
                result.push(index);
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
                newBuild.state = one.state;
                newBuild.vehicleId = one.vehicleId;
                newBuild.skillIds = this.unionArrays(this.unionArrays(one.skillIds, two.skillIds), vehicle.skillIds);
                result.push(newBuild);

                one = undefined;
                two = undefined;
            }
        }
        return result;
    }

    private _initPacks() {
        this.packMap = {};
        this.packs = [];
        for (let pack of packs) {
            let p: Pack = Object.assign({}, pack);
            p.minifigs = [];
            p.builds = [];
            p.mustHave = false;
            p.access = [];
            if (pack.id in this.packMap) {
                console.log('pack ' + pack.id + ' is already in packMap');
            }
            p.released = this.waveMap[p.wave].released;
            this.packMap[pack.id] = p;
            this.packs.push(p);
        }        
        for (let pack of this.packs) {
            this.waveMap[pack.wave].packs.push(pack);
        }
        for (let wave of this.waves) {
            wave.packs.sort((a: Pack, b: Pack) => {
                if (a.type > b.type) {
                    return 1;
                } else if (a.type < b.type) {
                    return -1;
                } else {
                    return 0;
                }
            });
        }
    }

    private _initCharacters() {
        this.minifigMap = {};
        this.urlToCharacter = {};
        this.minifigs = [];
        for (let data of minifigs) {
            let minifig: Minifig = new Minifig();
            Object.assign(minifig, data);
            minifig.type = PieceType.Character;
            minifig.skills = new Abilities(this.getSkills(data.skillIds)).orderByName().list;
            minifig.locationAccess = [];
            if (minifig.url !== undefined) {
                this.urlToCharacter[minifig.url] = minifig;
            }
            for (let skill of minifig.skills) {
                skill.providers.push(minifig);
                if (skill.type == AbilityType.LocationAccess) {
                    minifig.locationAccess.push(skill);
                }
            }

            let pack = this.packMap[minifig.packId];
            if (pack !== undefined) {
                pack.minifigs.push(minifig.id);
                minifig.isYear2 = pack.year == 2;
            } else {
                console.log('cannot find pack ' + minifig.packId);
            }

            minifig.workInProgress = !pack.released;

            this.minifigMap[minifig.id] = minifig;
            this.minifigs.push(minifig);
            if (minifig.skillIds.length > 7) {
                minifig.extra = "all-rounder";
            }
        }
    }

    private _initBuilds() {
        this.builds = [];
        this.buildMap = {};

        let mergedBuilds = this.mergeBuilds();
        for (let data of mergedBuilds) {
            let vehicle: Vehicle = Object.assign({}, data);
            vehicle.type = PieceType.Build;
            vehicle.skills = this.getSkills(data.skillIds);
            for (let skill of vehicle.skills) {
                skill.providers.push(vehicle);
            }

            let pack = this.packMap[vehicle.packId];
            if (pack !== undefined) {
                pack.builds.push(vehicle.id);
            } else {
                console.log('cannot find pack ' + vehicle.packId);
            }

            this.builds.push(vehicle);
            this.buildMap[vehicle.id] = vehicle;
        }
    }

    private _initWaves() {
        this.waves = [];
        this.waveMap = {};

        for (let data of waves) {
            let wave = <Wave>{ packs: [], number: data.wave, year: data.year, release: data.release, released: data.released, image: data.image };
            this.waveMap[data.wave] = wave;
            this.waves.push(wave);
        }

        this.waves.sort((a: Wave, b: Wave) => {
                if (a.number > b.number) {
                    return -1;
                } else if (a.number < b.number) {
                    return 1;
                } else {
                    return 0;
                }
        });
    }

    private _initLevels() {
        this.levels = new Levels();
        this.levels.init(this);

        // link levels to packs
        for (let level of this.levels.list) {
            let accessAbility = this.getAbility(level.access);
            if (accessAbility !== undefined) {
                if (accessAbility.levels === undefined) {
                    accessAbility.levels = [];
                }
                accessAbility.levels.push(level);
            }
        }

        this._linkAbilitiesToLevels();
    }

    private _linkAbilitiesToLevels() {
        for (let ability of this.skills) {
            if (ability.providers.length == 0 || ability.type != AbilityType.LocationAccess) {
                continue;
            }


            let packId = ability.providers[0].packId;
            for (let piece of ability.providers) {
                if (packId !== piece.packId) {
                    packId = -1;
                }

                if (ability.levels !== undefined) {
                    this.packMap[piece.packId].access = this.packMap[piece.packId].access.concat(ability.levels);
                }
            }
            if (packId !== -1) {
                this.packMap[packId].exclusiveAccess = true;
            }
        }
    }
}
