import { Component, Input, Pipe, Injectable, PipeTransform } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DataService, Piece, PieceType } from '../../data';

@Pipe({
    name: 'limitFilter',
    pure: false
})
@Injectable()
class LimitFilter implements PipeTransform {
    transform(items: any[], args: number): any {
        let texts = [];
		for (let i = 0; i < 3 && items.length > i; i++) {
			texts.push(items[i].name);
		}
		if (items.length == 4) {
			texts.push(items[3].name);
		}
		else if (items.length > 3) {
			texts.push("and " + (items.length - 3) + " more");
		}
		else if (items.length == 0) {
			texts.push("none");
		}
        return texts;
    }
}

@Component({
	moduleId: module.id,
	selector: 'cmp-piece-table',
	styleUrls: ['piece-table.component.css'],
	templateUrl: 'piece-table.component.html',
	pipes: [LimitFilter],
	directives: [ROUTER_DIRECTIVES]
})
export class PieceTableComponent {
    @Input() pieces: Piece[];
}
