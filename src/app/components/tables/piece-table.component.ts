import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DataService, Piece, PieceType } from '../../data';
import { LimitFilter } from './common';

@Component({
	moduleId: module.id,
	selector: 'cmp-piece-table',
	styleUrls: ['table.component.css'],
	templateUrl: 'piece-table.component.html',
	pipes: [LimitFilter],
	directives: [ROUTER_DIRECTIVES]
})
export class PieceTableComponent {
    @Input() pieces: Piece[];
}
