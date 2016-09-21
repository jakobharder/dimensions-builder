import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MetaService } from '../meta';
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

    constructor(private dataService: DataService,
                private meta: MetaService) {
    }

    ngOnInit() {
        this.meta.set({
            title: "Complete list of all characters",
            description: "Overview of all Lego Dimensions characters.",
            image: ''
        });
        this.characters = new Pieces(this.dataService.getAllMinifigs()).getOrdered().byName().list;
    }
}
