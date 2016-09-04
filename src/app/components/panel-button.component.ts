import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	moduleId: module.id,
	selector: 'panel-button',
	templateUrl: 'panel-button.component.html',
    styleUrls: ['panel-button.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class PanelButtonComponent {
    @Input() title: string;
    @Input() desc: string;
    @Input() image: string;
}
