import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Skill, Abilities, AbilitiesOrdered, DataService } from './../data/index';
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
                private title: Title) {
    }
    ngOnInit() {
        this.title.setTitle("Character Abilities - Lego Dimensions Builder");

        this.allAbilities = this.data.getAbilities(null);

        this.sub = this.route
            .data
            .subscribe(params => {
                this.type = params['type'];

                switch (this.type) {
                case AbilityListType.Combos:
                    this.abilities = this.allAbilities.getFilteredByCombo(true).orderByName();
                    this.listTitle = "Important Ability Combos Needed to Unlock Everything";
                    this.title.setTitle(this.listTitle);
                    this.isCombo = true;
                    break;
                case AbilityListType.Rare:
                    this.abilities = this.allAbilities.getRare().getFilteredByCombo(false).orderByName();
                    this.listTitle = "Exclusive and Rare Character and Vehicle Abilities";
                    this.title.setTitle(this.listTitle);
                    this.isRare = true;
                    break;
                case AbilityListType.All:
                default:
                    this.abilities = this.allAbilities.getFilteredByCombo(false).orderByName();
                    this.listTitle = "Complete Character and Vehicle Ability List";
                    this.title.setTitle(this.listTitle);
                    this.isAll = true;
                    break;
                }
            });

        this.abilityCount = 0;
        this.comboCount = 0;
        this.uniqueAbilitiesCount = 0;
        this.uniqueCombosCount = 0;
        for (let i of this.allAbilities.list) {
            if (!i.combo) {
                this.abilityCount++;
                if (i.providers.length == 1) {
                    this.uniqueAbilitiesCount++;
                }
            } else {
                this.comboCount++;
                if (i.providers.length == 1) {
                    this.uniqueCombosCount++;
                }
            }
        }
    }
    
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
