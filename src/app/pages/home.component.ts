import { Component, OnInit } from '@angular/core';
import { MetaService, MetaModel } from '../meta';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Piece, Pieces, DataService } from '../data';
import { PieceTableComponent } from '../components/tables';

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html',
	directives: [ROUTER_DIRECTIVES, PieceTableComponent],
})
export class HomeComponent implements OnInit {
	private mostSkills: Piece[];

	constructor(private router: Router, 
				private dataService: DataService,
				private meta: MetaService) {
	}

	ngOnInit() {
		this.meta.set(<MetaModel>{
			title: "Home",
			description: "Lego Dimensions Builder is a Dimensions Character and Vehicle Ability Guide.",
			image: ''
		});

		let mostSkills: Piece[] = [];
		for (let minifig of this.dataService.getAllMinifigs()) {
			if (minifig.skills.length > 6) {
				mostSkills.push(minifig);
			}
		}
		this.mostSkills = new Pieces(mostSkills).getOrdered().byName().list;
	}
}
