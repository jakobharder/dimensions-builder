import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Abilities, DataService } from './../data/index';
import { MetaService } from './../shared/index';
import { MinifigTextlinkComponent } from './../components/index';

export enum AbilityListType {
    Rare,
    All,
    Combos
}

@Component({
	moduleId: module.id,
	selector: 'ability-list',
	templateUrl: 'ability-list.component.html',
    directives: [ROUTER_DIRECTIVES, MinifigTextlinkComponent]
})
export class AbilityListComponent implements OnInit, OnDestroy {
    sub: any;

    type: AbilityListType;
    allAbilities: Abilities;
    abilities: Abilities;
    combos: Abilities;
    rare: Abilities;

    listTitle: string;
    abilityCount: number;
    comboCount: number;
    uniqueAbilitiesCount: number;
    uniqueCombosCount: number;

    isAll: boolean;
    isRare: boolean;
    isCombo: boolean;

    constructor(private data: DataService,
                private route: ActivatedRoute,
                private meta: MetaService) {
    }
    ngOnInit() {
        this.meta.setTitle("Character Abilities - Lego Dimensions Builder");

        this.allAbilities = this.data.getAbilities(null);

        this.sub = this.route
            .data
            .subscribe(params => {
                this.type = params['type'];

                switch (this.type) {
                case AbilityListType.Combos:
                    this.abilities = this.allAbilities.getFilteredByCombo(true).orderByName();
                    this.listTitle = "Important Ability Combos Needed to Unlock Everything";
                    this.meta.setTitle(this.listTitle);
                    this.meta.setDescription("A complete list of all important Character and Vehicle ability combinations like dive + digging. They are required to unlock everyting in the game.");
                    this.isCombo = true;
                    break;
                case AbilityListType.Rare:
                    this.abilities = this.allAbilities.getRare().getFilteredByCombo(false).orderByName();
                    this.listTitle = "Exclusive and Rare Character and Vehicle Abilities";
                    this.meta.setTitle(this.listTitle);
                    this.meta.setDescription("A complete list of all unique and rare Character and Vehicle abilities and which Piece has them.");
                    this.isRare = true;
                    break;
                case AbilityListType.All:
                default:
                    this.abilities = this.allAbilities.getFilteredByCombo(false).orderByName();
                    this.listTitle = "Complete Character and Vehicle Ability List";
                    this.meta.setTitle(this.listTitle);
                    this.meta.setDescription("A complete overview list of all Character and Vehicle abilities and which Piece has them.");
                    this.isAll = true;
                    break;
                }
            });

        this.abilityCount = 0;
        this.comboCount = 0;
        this.uniqueAbilitiesCount = 0;
        this.uniqueCombosCount = 0;
        for (let ability of this.allAbilities.list) {
            if (!ability.combo) {
                this.abilityCount++;
                if (ability.providers.length == 1) {
                    this.uniqueAbilitiesCount++;
                }
            } else {
                this.comboCount++;
                if (ability.providers.length == 1) {
                    this.uniqueCombosCount++;
                }
            }
        }
    }
    
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
