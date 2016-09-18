import { Component, Input, Pipe, Injectable, PipeTransform } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Skill, DataService } from '../../data';

@Pipe({
    name: 'limitFilter',
    pure: false
})
@Injectable()
export class LimitFilter implements PipeTransform {
    transform(items: any[], args: number): any {
        let texts = [];
		for (let i = 0; i < 3 && items.length > i; i++) {
			texts.push(items[i].name);
		}
		if (items.length > 3) {
			texts.push("...");
		}
		else if (items.length == 0) {
			texts.push("none");
		}
        return texts;
    }
}

@Component({
	moduleId: module.id,
	selector: 'cmp-ability-table',
	styleUrls: ['ability-table.component.css'],
	templateUrl: 'ability-table.component.html',
	pipes: [LimitFilter],
	directives: [ROUTER_DIRECTIVES]
})
export class AbilityTableComponent {
    @Input() abilities: Skill[];
}
