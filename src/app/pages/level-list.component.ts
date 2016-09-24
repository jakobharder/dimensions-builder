import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MetaService } from '../meta';
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

        this.description = "There are " + this.levels.list.length + " released levels for Lego Dimensions so far.";

        this.meta.set({
            title: "List of all Lego Dimensions Levels, Worlds and Battle Areanas",
            description: this.description,
            image: ''
        });
    }
}
