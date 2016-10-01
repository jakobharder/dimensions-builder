import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DataService, Level } from '../../data';
import { LimitFilter } from './common';

@Component({
	moduleId: module.id,
	selector: 'cmp-level-table',
	styleUrls: ['table.component.css'],
	templateUrl: 'level-table.component.html',
	pipes: [LimitFilter],
	directives: [ROUTER_DIRECTIVES]
})
export class LevelTableComponent {
    @Input() levels: Level[];
	@Input() showFranchise: boolean;
}
