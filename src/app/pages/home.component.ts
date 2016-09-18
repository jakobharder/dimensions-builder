import { Component, OnInit } from '@angular/core';
import { MetaService } from '../meta';
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

	constructor(private router: Router, 
				private dataService: DataService,
				private meta: MetaService) {
	}

	ngOnInit() {
		this.meta.set({
			title: "Home",
			description: "Lego Dimensions Builder is a Dimensions Character and Vehicle Ability Guide."
		});

		let mostSkills: Minifig[] = [];
		for (let minifig of this.dataService.getAllMinifigs()) {
			if (minifig.skills.length > 5) {
				mostSkills.push(minifig);
			}
		}
		this.mostSkills = mostSkills;
	}
}
