import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Abilities, AbilityType, DataService } from '../data';
import { MetaService, MetaModel } from '../meta';
import { AbilityTableComponent } from '../components/tables';
import { ShareSectionComponent, CommentSectionComponent, NavSectionComponent, AdsComponent } from '../components';

export enum AbilityListType {
    Rare,
    All,
    Combos,
    Year2
}

@Component({
	moduleId: module.id,
	selector: 'ability-list',
	templateUrl: 'ability-list.component.html',
    directives: [ROUTER_DIRECTIVES, ShareSectionComponent, AbilityTableComponent, ShareSectionComponent, CommentSectionComponent, NavSectionComponent, AdsComponent]
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
    isYear2: boolean;

    constructor(private data: DataService,
                private route: ActivatedRoute,
                private meta: MetaService) {
    }
    ngOnInit() {
        this.meta.set(<MetaModel>{
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
                    this.abilities = this.unfiltered.getFilteredByType(AbilityType.Combo).orderByName();
                    this.listTitle = "Important Ability Combos Needed to Unlock Everything";
                    this.meta.set(<MetaModel>{
                        title: this.listTitle, 
                        description: "A complete list of all important Character and Vehicle ability combinations like dive + digging. They are required to unlock everyting in the game.",
            image: ''
                    });
                    this.isCombo = true;
                    break;
                case AbilityListType.Rare:
                    this.abilities = this.unfiltered.getRare().getFilteredByType(AbilityType.Normal).orderByName();
                    this.listTitle = "Exclusive and Rare Character and Vehicle Abilities";
                    this.meta.set(<MetaModel>{
                        title: this.listTitle, 
                        description: "A complete list of all unique and rare Character and Vehicle abilities and which Piece has them.",
            image: ''
                    });
                    this.isRare = true;
                    break;
                case AbilityListType.Year2:
                    this.abilities = this.unfiltered.getYear2().getFilteredByType(AbilityType.Normal).orderByName();
                    this.listTitle = "Year 2 Character Abilities";
                    this.meta.set(<MetaModel>{
                        title: this.listTitle, 
                        description: "A complete list of all new Lego Dimensions year 2 character abilities with mapping to characters and vehicles.",
            image: ''
                    });
                    this.isYear2 = true;
                    break;
                case AbilityListType.All:
                default:
                    this.abilities = this.unfiltered.getFilteredByType(AbilityType.Normal).orderByName();
                    this.listTitle = "Complete Character and Vehicle Ability List";
                    this.meta.set(<MetaModel>{
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
            if (ability.type === AbilityType.Normal) {
                this.abilityCount++;
                if (ability.providers.length == 1) {
                    this.uniqueAbilitiesCount++;
                }
            } else if (ability.type === AbilityType.Combo) {
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
