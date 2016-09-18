import { Component, OnInit, OnDestroy } from '@angular/core';
import { MetaService } from '../meta';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Pack, Minifig, Skill, DataService, packTypeStrings } from '../data';
import { MinifigPanelComponent } from '../components';

@Component({
	moduleId: module.id,
	selector: 'pack-details',
    styleUrls: ['pack-details.component.css'],
	templateUrl: 'pack-details.component.html',
    styles: ['img { max-width: 100%; }'],
    directives: [ROUTER_DIRECTIVES, MinifigPanelComponent]
})
export class PackDetailsComponent implements OnInit, OnDestroy {
    sub: any;
    pack: Pack;
    characters: Minifig[];
    skills: Skill[];
    private type: string;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private meta: MetaService) {

    }

    ngOnInit() {
        this.meta.set({
            title: "Pack Details",
            description: ""
        });

        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.pack = this.dataService.getPack(id);
            this.characters = this.dataService.getMinifigs(this.pack.minifigs);
            console.log(this.characters);

            this.skills = this.dataService.getSkills(this.characters.getSkills());
            this.meta.set({
                title: this.pack.name + " " + packTypeStrings[this.pack.type],
                description: ""
            });
            this.type = packTypeStrings[this.pack.type];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
