import { Component, OnInit } from '@angular/core';
import { MetaService, MetaModel } from '../meta';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Skill, Vehicle, Piece, Pieces, AbilitiesOrdered, DataService } from '../data';
import { MinifigPanelComponent } from '../components';
import { PieceTableComponent } from '../components/tables';
import { ShareSectionComponent, CommentSectionComponent, NavSectionComponent, YoutubeComponent, AdsComponent } from '../components';

@Component({
	moduleId: module.id,
	selector: 'ability-list',
	templateUrl: 'ability-details.component.html',
    directives: [ROUTER_DIRECTIVES, MinifigPanelComponent, PieceTableComponent, ShareSectionComponent, CommentSectionComponent, NavSectionComponent, YoutubeComponent, AdsComponent]
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
    private description: string;

    constructor(private route: ActivatedRoute,
                private data: DataService,
                private meta: MetaService ) {
    }

    ngOnInit() {
        this.meta.set(<MetaModel>{
            title: "Ability Details",
            description: "",
            image: ''
        });

        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.ability = this.data.getAbilityByUrl(id);

            if (this.ability !== undefined && this.ability !== null) {
                this.builds = new Pieces(this.ability.providers).getBuilds();
                this.characters = new Pieces(this.ability.providers).getCharacters();

                this.rare = this.ability.isRare();
                if (this.ability.isUnique()) {
                    if (this.characters.length == 1 && this.builds.length == 0) {
                        this.unique = this.characters[0];
                    }
                    else if (this.characters.length == 0 && this.builds.length == 1) {
                        this.unique = this.builds[0];
                    }
                }
                this.buildsOnly = this.characters.length == 0;
                this.charactersOnly = this.builds.length == 0;

                let desc = "";
                if (!this.buildsOnly) {
                    desc += 'When playing a character with ' + this.ability.name + ' you can ' + this.ability.desc + '. '
                } else if (this.buildsOnly) {
                    desc += 'This is a build ability a character can use by riding a vehicle or using a gadget. With ' + this.ability.name + ' you can ' + this.ability.desc + '. ';
                }
                if (this.unique !== null) {
                    desc += this.ability.name + ' is a unique ability which only ' + (this.buildsOnly?'the ':'') + this.unique.name + ' has. ';
                }
                else {
                    if (this.rare) {
                        desc += this.ability.name + " is a rare ability. ";
                    } else {
                        desc += this.ability.name + " is a common ability. ";
                    }
                    desc += "There are " + (this.characters.length + this.builds.length) + " characters and builds with it. ";
                }
                if (this.ability.extradesc) {
                    desc += this.ability.extradesc + " ";
                }
                this.description = desc;

                this.meta.set(<MetaModel>{
                    title: this.ability.name + ' Ability with character list',
                    description: desc,
                    image: this.ability.image ? ('/assets/images/abilities/' + this.ability.image + '.jpg') : undefined
                });
            }
        });
    }
}
