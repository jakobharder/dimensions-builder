import { Component, OnInit } from '@angular/core';
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

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.minifigs = this.dataService.getAllMinifigs();
    }
}
