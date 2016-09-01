import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Pack, Minifig, DataService } from '../data/index';
import { PackComponent } from '../components/index';

@Component({
	moduleId: module.id,
	selector: 'minifig-details',
	templateUrl: 'minifig-details.component.html',
    directives: [ROUTER_DIRECTIVES, PackComponent]
})
export class MinifigDetailsComponent implements OnInit, OnDestroy {
    sub: any;
    pack: Pack;
    minifig: Minifig;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private title: Title) {

    }

    ngOnInit() {
        this.title.setTitle("Character Details - Lego Dimensions Builder");
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.minifig = this.dataService.getMinifig(id);
            if (this.minifig !== undefined) {
                this.pack = this.dataService.getPack(this.minifig.packId);
                this.title.setTitle(this.minifig.name + " - abilities and other details");
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
