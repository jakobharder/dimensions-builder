import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MetaService } from '../meta';
import { Level, Levels, LevelCollection, DataService } from '../data';

@Component({
	moduleId: module.id,
	templateUrl: 'level-list.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class LevelListComponent implements OnInit {
    private levels: Levels;
    private collections: LevelCollection[];

    constructor(private data: DataService,
                private meta: MetaService ) {
    }

    ngOnInit() {
        this.meta.set({
            title: "List of all Lego Dimensions Levels, Worlds and Battle Areanas",
            description: '',
            image: ''
        });

        this.levels = this.data.getLevels();
        this.collections = this.levels.getCollections();
    }
}
