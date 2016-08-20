import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Minifig } from './../data/index';

@Component({
	moduleId: module.id,
	selector: 'minifig-textlink',
	template: `<a [routerLink]="[\'/minifig/\' + minifig.id]">{{minifig.name}}</a>`,
    directives: [ROUTER_DIRECTIVES]
})

export class MinifigTextlinkComponent {
    @Input() minifig: Minifig;
}
