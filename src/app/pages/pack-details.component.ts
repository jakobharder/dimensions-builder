import { Component, OnInit, OnDestroy } from '@angular/core';
import { MetaService } from '../meta';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Pack, Piece, Skill, DataService, packTypeStrings } from '../data';
import { MinifigPanelComponent } from '../components';
import { AbilityTableComponent, PieceTableComponent } from '../components/tables';

@Component({
	moduleId: module.id,
	selector: 'pack-details',
    styleUrls: ['pack-details.component.css'],
	templateUrl: 'pack-details.component.html',
    directives: [ROUTER_DIRECTIVES, MinifigPanelComponent, AbilityTableComponent, PieceTableComponent]
})
export class PackDetailsComponent implements OnInit, OnDestroy {
    sub: any;
    pack: Pack;
    characters: Piece[];
    builds: Piece[];
    private skills: Skill[];
    private buildAbilities: Skill[];
    private type: string;
    private mustHave: boolean = false;
    private mustHaveText: string;
    private description: string;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private meta: MetaService) {

    }

    ngOnInit() {
        this.meta.set({
            title: "Pack Details",
            description: "", 
            image: ''
        });

        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.pack = this.dataService.getPack(id);
            this.characters = this.dataService.getMinifigs(this.pack.minifigs);
            this.builds = this.dataService.getBuilds(this.pack.builds);

            this.skills = this.dataService.getSkills(this.characters.getSkills());
            this.buildAbilities = this.dataService.getSkills(this.builds.getSkills());

            this.meta.set({
                title: this.pack.name + " " + packTypeStrings[this.pack.type],
                description: "See all characters, builds and abilities included in the " + this.pack.name + " " + packTypeStrings[this.pack.type] + ".",
                image: '/assets/images/' + this.pack.image + '.jpg'
            });
            this.type = packTypeStrings[this.pack.type];

            this.mustHaveText = null;
            for (let ability of this.skills) {
                if (ability.unimportant) {
                    continue;
                }
                let thisPack = false;
                for (let provider of ability.providers) {
                    thisPack = provider.packId == this.pack.id;
                    if (!thisPack) {
                        break;
                    }
                }
                if (thisPack) {
                    this.mustHave = true;
                    if (this.mustHaveText === null) {
                        this.mustHaveText = ability.name;
                    } else {
                        this.mustHaveText += ", " + ability.name;
                    }
                }
            }

            this.description = "";
            if (!this.pack.released) {
                this.description += "This pack has not been released yet. The content is work-in-progress.";
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
