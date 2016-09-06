import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { DataService, LevelData } from './../data/index';

@Component({
	moduleId: module.id,
	templateUrl: 'level-details.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class LevelDetailsComponent implements OnInit {
    sub: any;
    level: LevelData;

    constructor(private route: ActivatedRoute,
                private data: DataService,
                private title: Title ) {
    }

    ngOnInit() {
        this.title.setTitle("Level Details")
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.level = this.data.getLevel(id);
            if (this.level !== undefined) {
                this.title.setTitle(this.level.name);
            }
        });
    }
}
