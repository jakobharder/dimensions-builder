import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Skill, DataService } from '../../data';
import { LimitFilter } from './common';

@Component({
	moduleId: module.id,
	selector: 'cmp-ability-table',
	styleUrls: ['table.component.css'],
	templateUrl: 'ability-table.component.html',
	pipes: [LimitFilter],
	directives: [ROUTER_DIRECTIVES]
})
export class AbilityTableComponent {
    @Input() abilities: Skill[];
}
