import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Skill, Vehicle, Piece, Pieces, AbilitiesOrdered, DataService } from './../data/index';
import { MinifigPanelComponent } from './../components/index';

@Component({
	moduleId: module.id,
	selector: 'ability-list',
	templateUrl: 'ability-details.component.html',
    directives: [ROUTER_DIRECTIVES, MinifigPanelComponent]
})
export class AbilityDetailsComponent implements OnInit {
    sub: any;
    ability: Skill;
    builds: Piece[] = [];
    characters: Piece[] = [];
    rare: boolean = false;
    unique: Piece = null;
    buildsOnly: boolean = false;
    charactersOnly: boolean = false;

    constructor(private route: ActivatedRoute,
                private data: DataService,
                private meta: MetaService ) {
    }

    ngOnInit() {
        this.meta.set({
            title: "Ability Details",
            description: ""
        });

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.ability = this.data.getAbilityByUrl(id);

            if (this.ability != undefined) {
                this.builds = new Pieces(this.ability.providers).getBuilds();
                this.characters = new Pieces(this.ability.providers).getCharacters();

                this.rare = (this.characters.length + this.builds.length) < 4;
                if (this.characters.length == 1 && this.builds.length == 0) {
                    this.unique = this.characters[0];
                }
                else if (this.characters.length == 0 && this.builds.length == 1) {
                    this.unique = this.builds[0];
                }
                this.buildsOnly = this.characters.length == 0;
                this.charactersOnly = this.builds.length == 0;

                let desc = "";
                if (this.unique !== undefined) {
                    desc = this.ability.name + " is a unique ability. Only " + this.unique.name + " has this power.";
                }
                else {
                    if (this.rare) {
                        desc = this.ability.name + " is a rare ability. ";
                    } else {
                        desc = this.ability.name + " is a common ability. ";
                    }
                    desc += "There are " + (this.characters.length + this.builds.length) + " characters and builds with it.";
                }

                this.meta.set({
                    title: this.ability.name + ' Ability with character list',
                    description: desc
                });
            }
        });
    }
}
