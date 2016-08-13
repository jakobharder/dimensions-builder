import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Minifig } from './../data/index';

@Component({
	moduleId: module.id,
	selector: 'minifig-panel',
	templateUrl: 'minifig-panel.component.html',
    styleUrls: ['minifig-panel.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class MinifigPanelComponent {
    @Input() minifig: Minifig;
}
