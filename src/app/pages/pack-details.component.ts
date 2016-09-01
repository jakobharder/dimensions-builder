import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Pack, Minifig, Skill, DataService } from '../data/index';
import { MinifigPanelComponent } from '../components/index';

@Component({
	moduleId: module.id,
	selector: 'pack-details',
	templateUrl: 'pack-details.component.html',
    styles: ['img { max-width: 100%; }'],
    directives: [ROUTER_DIRECTIVES, MinifigPanelComponent]
})
export class PackDetailsComponent implements OnInit, OnDestroy {
    sub: any;
    pack: Pack;
    minifigs: Minifig[];
    skills: Skill[];

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private title: Title) {

    }

    ngOnInit() {
        this.title.setTitle("Pack Details - Lego Dimensions Builder"); 
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.pack = this.dataService.getPack(id);
            this.minifigs = this.dataService.getMinifigs(this.pack.minifigs);

            this.skills = this.dataService.getSkills(this.minifigs.getSkills());
            this.title.setTitle(this.pack.name + " Details - Lego Dimensions Builder");
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
