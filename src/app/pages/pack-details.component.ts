import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Pack, Minifig, Skill, DataService } from '../data/index';
import { MinifigTextlinkComponent } from '../components/index';

@Component({
	moduleId: module.id,
	selector: 'pack-details',
	templateUrl: 'pack-details.component.html',
    directives: [ROUTER_DIRECTIVES, MinifigTextlinkComponent]
})
export class PackDetailsComponent implements OnInit, OnDestroy {
    sub: any;
    pack: Pack;
    minifigs: Minifig[];
    skills: Skill[];

    constructor(private route: ActivatedRoute,
                private dataService: DataService) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.pack = this.dataService.getPack(id);
            this.minifigs = this.dataService.getMinifigs(this.pack.minifigs);

            this.skills = this.dataService.getSkills(this.minifigs.getSkills());
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
