import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MetaService, MetaModel } from '../meta';
import { Piece, DataService, Pieces } from '../data';
import { PieceTableComponent } from '../components/tables';

@Component({
	moduleId: module.id,
	selector: 'character-list',
	templateUrl: 'character-list.component.html',
    directives: [ROUTER_DIRECTIVES, PieceTableComponent ]
})

export class CharacterListComponent implements OnInit {
    characters: Piece[];
    private scrollUp: any;

    constructor(private dataService: DataService,
                private meta: MetaService) {
    }

    ngOnInit() {
        this.meta.set(<MetaModel>{
            title: "Complete list of all characters",
            description: "Overview of all Lego Dimensions characters.",
            image: ''
        });
        this.characters = new Pieces(this.dataService.getAllMinifigs()).getOrdered().byName().list;
    }
}
