import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Pack, Minifig, DataService } from '../data';
import { PackComponent } from '../components';
import { AbilityTableComponent } from '../components/tables';

@Component({
	moduleId: module.id,
	selector: 'page-character-details',
	templateUrl: 'character-details.component.html',
    directives: [ROUTER_DIRECTIVES, PackComponent, AbilityTableComponent]
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
    sub: any;
    pack: Pack;
    character: Minifig;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private title: Title) {

    }

    ngOnInit() {
        this.title.setTitle("Character Details - Lego Dimensions Builder");
        this.sub = this.route.params.subscribe(params => {
            let id = +params['id'];
            this.character = this.dataService.getMinifig(id);
            if (this.character !== undefined) {
                this.pack = this.dataService.getPack(this.character.packId);
                this.title.setTitle(this.character.name + " - abilities and other details");
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
