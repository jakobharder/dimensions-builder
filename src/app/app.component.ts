import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Event, NavigationEnd } from '@angular/router';
declare let ga:Function;

import { TopNavComponent, SidebarComponent } from './shared/index';
import { DataService } from './data/index';

@Component({
	moduleId: module.id,
	selector: 'dimensions-builder',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [ROUTER_DIRECTIVES, TopNavComponent, SidebarComponent],
	providers: [DataService]
})
export class AppComponent {
	constructor(public router: Router, private dataService: DataService) {
        this.router.events.subscribe(
            (event:Event) => {
                if (event instanceof NavigationEnd) {
                    ga('send', 'pageview', event.urlAfterRedirects);
                }
            });
	}
}
