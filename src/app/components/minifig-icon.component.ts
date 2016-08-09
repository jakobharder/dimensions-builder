import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Minifig } from './../data/index';

@Component({
	moduleId: module.id,
	selector: 'minifig-icon',
	template: `
        <div>
            <img src="/assets/images/{{minifig.image}}.png">
        </div>
    `,
    styleUrls: ['minifig-icon.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class MinifigIconComponent {
    @Input() minifig: Minifig;
}
