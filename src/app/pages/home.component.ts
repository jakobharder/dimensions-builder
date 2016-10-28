import { Component, OnInit } from '@angular/core';
import { MetaService, MetaModel } from '../meta';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Piece, Pieces, DataService } from '../data';
import { PieceTableComponent } from '../components/tables';
import { ShareSectionComponent, CommentSectionComponent, NavSectionComponent } from '../components';

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html',
	directives: [ROUTER_DIRECTIVES, PieceTableComponent, ShareSectionComponent, CommentSectionComponent, NavSectionComponent],
})
export class HomeComponent implements OnInit {
	private mostSkills: Piece[];

	constructor(private router: Router, 
				private dataService: DataService,
				private meta: MetaService) {
	}

	ngOnInit() {
		this.meta.set(<MetaModel>{
			title: null,
			description: 'All about Lego Dimensions Abilities, Characters, Vehicles, Levels. Find out which abilities you need to 100% complete a level and more.',
			image: ''
		});

		let mostSkills: Piece[] = [];
		for (let minifig of this.dataService.getAllMinifigs()) {
			if (minifig.skills.length > 7) {
				mostSkills.push(minifig);
			}
		}
		this.mostSkills = new Pieces(mostSkills).getOrdered().byName().list;
	}
}
