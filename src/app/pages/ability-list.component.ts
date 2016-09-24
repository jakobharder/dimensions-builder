import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Abilities, DataService } from '../data';
import { MetaModel, MetaService } from '../meta';
import { ShareSectionComponent } from '../components';
import { AbilityTableComponent } from '../components/tables';

export enum AbilityListType {
    Rare,
    All,
    Combos
}

@Component({
	moduleId: module.id,
	selector: 'ability-list',
	templateUrl: 'ability-list.component.html',
    directives: [ROUTER_DIRECTIVES, ShareSectionComponent, AbilityTableComponent]
})
export class AbilityListComponent implements OnInit, OnDestroy {
    sub: any;

    type: AbilityListType;
    unfiltered: Abilities;
    abilities: Abilities;

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
        this.meta.set({
            title: "Character Abilities", 
            description: "A complete overview list of all Character and Vehicle abilities and which Piece has them.",
            image: ''
        });

        this.unfiltered = this.data.getAbilities(null);

        this.sub = this.route
            .data
            .subscribe(params => {
                this.type = params['type'];
                let meta : MetaModel;

                switch (this.type) {
                case AbilityListType.Combos:
                    this.abilities = this.unfiltered.getFilteredByCombo(true).getWithoutHidden().orderByName();
                    this.listTitle = "Important Ability Combos Needed to Unlock Everything";
                    this.meta.set({
                        title: this.listTitle, 
                        description: "A complete list of all important Character and Vehicle ability combinations like dive + digging. They are required to unlock everyting in the game.",
            image: ''
                    });
                    this.isCombo = true;
                    break;
                case AbilityListType.Rare:
                    this.abilities = this.unfiltered.getRare().getFilteredByCombo(false).getWithoutHidden().orderByName();
                    this.listTitle = "Exclusive and Rare Character and Vehicle Abilities";
                    this.meta.set({
                        title: this.listTitle, 
                        description: "A complete list of all unique and rare Character and Vehicle abilities and which Piece has them.",
            image: ''
                    });
                    this.isRare = true;
                    break;
                case AbilityListType.All:
                default:
                    this.abilities = this.unfiltered.getFilteredByCombo(false).getWithoutHidden().orderByName();
                    this.listTitle = "Complete Character and Vehicle Ability List";
                    this.meta.set({
                        title: this.listTitle, 
                        description: "A complete overview list of all Character and Vehicle abilities and which Piece has them.",
            image: ''
                    });
                    this.isAll = true;
                    break;
                }
            });

        this.abilityCount = 0;
        this.comboCount = 0;
        this.uniqueAbilitiesCount = 0;
        this.uniqueCombosCount = 0;
        for (let ability of this.unfiltered.list) {
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
