import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Minifig, DataService } from '../data/index';

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html',
	directives: [ROUTER_DIRECTIVES],
})
export class HomeComponent implements OnInit {
	mostSkills: Minifig[];

	constructor(private router: Router, private dataService: DataService) {
	}

	ngOnInit() {
		let mostSkills: Minifig[] = [];
		for (let minifig of this.dataService.getAllMinifigs()) {
			if (minifig.skills.length > 5) {
				mostSkills.push(minifig);
			}
		}
		this.mostSkills = mostSkills;
	}
}
