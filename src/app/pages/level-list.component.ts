import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MetaService, MetaModel } from '../meta';
import { Level, Levels, LevelCollection, DataService } from '../data';
import { LevelTableComponent } from '../components/tables';
import { ShareSectionComponent, CommentSectionComponent, NavSectionComponent } from '../components';

@Component({
	moduleId: module.id,
	templateUrl: 'level-list.component.html',
    directives: [ROUTER_DIRECTIVES, LevelTableComponent, ShareSectionComponent, CommentSectionComponent, NavSectionComponent]
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

        this.description = `Find out the character abilities to complete a Lego Dimensions level or Adventure World. 
            The list now includes all wave 6 (year 2) levels, story chapters and Adventure Worlds.
            Year 1 data is not complete yet, but will follow soon.`;

        this.meta.set(<MetaModel>{
            title: 'Abilities needed for Lego Dimensions levels and Adventure Worlds',
            description: this.description,
            image: '/assets/images/lego-dimensions-level-abilities.jpg'
        });
    }
}
