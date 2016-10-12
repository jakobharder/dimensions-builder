import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { DataService, Pack, PackType, packTypeStrings } from '../../data';
import { LimitFilter } from './common';

@Component({
	moduleId: module.id,
	selector: 'cmp-pack-table',
	styleUrls: ['table.component.css'],
	templateUrl: 'pack-table.component.html',
	pipes: [LimitFilter],
	directives: [ROUTER_DIRECTIVES]
})
export class PackTableComponent {
    @Input() packs: Pack[];
	@Input() comments: string[];

	private typeStrings = packTypeStrings;
}
