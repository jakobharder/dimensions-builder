import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { DataService, Level, Abilities, AbilitiesOrdered } from '../data';
import { AbilityTableComponent } from '../components/tables';
import * as Serializer from './../data/serializer';

@Component({
	moduleId: module.id,
	templateUrl: 'level-details.component.html',
    directives: [ROUTER_DIRECTIVES, AbilityTableComponent]
})
export class LevelDetailsComponent implements OnInit {
    sub: any;
    level: Level;
    minikitAbilities: Abilities;
    rescueAbilities: Abilities;
    extraAbilities: Abilities;
    storyAbilities: Abilities;

    allAbilities: Abilities;

    serialized: string;

    constructor(private route: ActivatedRoute,
                private data: DataService,
                private title: Title ) {
    }

    ngOnInit() {
        this.title.setTitle("Level Details")
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.level = this.data.getLevel(id);
            if (this.level !== undefined) {
                this._initLevel();
            }
        });
    }

    private _initLevel() {
        this.title.setTitle(this.level.name);

        this.minikitAbilities = new Abilities(this.data.getSkills(this.level.abilitiesMinikits)).orderByName();
        this.rescueAbilities = new Abilities(this.data.getSkills(this.level.abilitiesRescue)).orderByName();
        this.extraAbilities = new Abilities(this.data.getSkills(this.level.abilitiesExtra)).orderByName();
        this.storyAbilities = new Abilities(this.data.getSkills(this.level.abilitiesStory)).orderByName();

        this.allAbilities = this.minikitAbilities.clone();
        this.allAbilities.addRange(this.rescueAbilities);
        this.allAbilities.addRange(this.extraAbilities);
        this.extraAbilities = this.allAbilities.clone();

        this.allAbilities.addRange(this.storyAbilities);
        this.allAbilities.orderByName();

        this.serialized = Serializer.abilitiesToString(this.allAbilities);
    }
}
