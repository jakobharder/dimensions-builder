import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Event, NavigationEnd } from '@angular/router';
import { ButtonComponent } from './basic';

@Component({
	moduleId: module.id,
	selector: 'share-section',
	templateUrl: './share-section.component.html',
	directives: [ButtonComponent]
})
export class ShareSectionComponent {
	private site = "http://dimensions-builder.com";
	private url;

	constructor(public router: Router) {
        this.router.events.subscribe(
            (event:Event) => {
                if (event instanceof NavigationEnd) {
					this.url = this.site + event.urlAfterRedirects;
                }
            });
	}
}
