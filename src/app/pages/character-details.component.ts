import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { MetaService } from '../meta';
import { Pack, Minifig, DataService } from '../data';
import { AbilityTableComponent, PackTableComponent } from '../components/tables';

@Component({
	moduleId: module.id,
	selector: 'page-character-details',
	templateUrl: 'character-details.component.html',
    directives: [ROUTER_DIRECTIVES, AbilityTableComponent, PackTableComponent]
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
    sub: any;
    pack: Pack;
    character: Minifig;
    private mustHave: boolean = false;
    private description: string;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private meta: MetaService) {

    }

    ngOnInit() {
        this.meta.set({
            title: "Character Details",
            description: ""
        });

        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.character = this.dataService.getMinifig(id);
            if (this.character !== undefined) {
                this.pack = this.dataService.getPack(this.character.packId);
                for (let ability of this.character.skills) {
                    if (ability.isUnique()) {
                        this.mustHave = true;
                        break;
                    }
                }
                let desc = this.character.name + " has " + this.character.skills.length + " abilities.";
                if (this.mustHave) {
                    desc += " At least one of then is a unique ability. You need " + this.character.name + " to unlock everything in Lego Dimensions.";
                }
                this.description = desc;

                this.meta.set({
                    title: this.character.name + "'s abilities and more",
                    description: desc
                });
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
