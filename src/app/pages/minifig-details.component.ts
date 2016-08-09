import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Pack, Minifig, DataService } from '../data/index';

@Component({
	moduleId: module.id,
	selector: 'minifig-details',
	templateUrl: 'minifig-details.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class MinifigDetailsComponent implements OnInit, OnDestroy {
    sub: any;
    pack: Pack;
    minifig: Minifig;

    constructor(private route: ActivatedRoute,
                private dataService: DataService) {

    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.minifig = this.dataService.getMinifig(id);
            if (this.minifig !== undefined) {
                this.pack = this.dataService.getPack(this.minifig.packId);
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
