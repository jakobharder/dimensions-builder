import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MetaService, MetaModel } from '../meta';
import { Level, Levels, LevelCollection, DataService } from '../data';
import { LevelTableComponent } from '../components/tables';

@Component({
	moduleId: module.id,
	templateUrl: 'level-list.component.html',
    directives: [ROUTER_DIRECTIVES, LevelTableComponent]
})
export class LevelListComponent implements OnInit {
    private levels: Levels;
    private collections: LevelCollection[];
    private description: string;

    constructor(private data: DataService,
                private meta: MetaService ) {
    }

    ngOnInit() {
        this.levels = this.data.getLevels();
        this.collections = this.levels.getCollections();

        this.description = 'The list has currently includes all released Lego Dimensions level packs from year 1 and 2, and parts of the main story. More will be added in the next days.';
        //"There are " + this.levels.list.length + " released levels for Lego Dimensions so far.";

        this.meta.set(<MetaModel>{
            title: 'All levels and the abilities needed to complete them',
            description: this.description,
            image: '/assets/images/lego-dimensions.jpg'
        });
    }
}
