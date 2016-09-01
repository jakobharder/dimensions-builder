import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Minifig, DataService } from './../data/index';
import { MinifigHeadComponent } from './../components/index';

@Component({
	moduleId: module.id,
	selector: 'minifig-list',
	templateUrl: 'minifig-list.component.html',
    directives: [ROUTER_DIRECTIVES, MinifigHeadComponent ]
})

export class MinifigListComponent implements OnInit {
    minifigs: Minifig[];

    constructor(private dataService: DataService,
                private title: Title) {
    }

    ngOnInit() {
        this.title.setTitle("List of all characters - Lego Dimensions Builder");
        this.minifigs = this.dataService.getAllMinifigs();
    }
}
