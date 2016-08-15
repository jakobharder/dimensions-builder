import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Minifig } from './../data/index';

@Component({
	moduleId: module.id,
	selector: 'minifig-head',
	template: '<img src="/assets/images/21/{{minifig.image}}.png">',
    styles: ['img { width: 16px; height: 21px; }'],
    directives: [ROUTER_DIRECTIVES]
})

export class MinifigHeadComponent {
    @Input() minifig: Minifig;
}
