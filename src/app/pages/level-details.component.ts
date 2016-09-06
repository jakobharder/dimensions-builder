import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { DataService } from './../data/index';

@Component({
	moduleId: module.id,
	templateUrl: 'level-details.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class LevelDetailsComponent implements OnInit {
    sub: any;
    constructor(private route: ActivatedRoute,
                private data: DataService,
                private title: Title ) {
    }

    ngOnInit() {
        this.title.setTitle("Level Details")
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
        });
    }
}
