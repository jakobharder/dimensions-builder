import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Event, NavigationEnd } from '@angular/router';
declare let ga:Function;

import { TopNavComponent } from './shared';
import { DataService } from './data';
import { MetaService } from './meta';
import { ShareSectionComponent } from './components';

@Component({
	moduleId: module.id,
	selector: 'dimensions-builder',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [ROUTER_DIRECTIVES, TopNavComponent, ShareSectionComponent],
	providers: [DataService, MetaService]
})
export class AppComponent {
	constructor(public router: Router, 
				private dataService: DataService,
				private metaService: MetaService) {
        this.router.events.subscribe(
            (event:Event) => {
                if (event instanceof NavigationEnd && typeof ga === "function") {
					ga('send', 'pageview', event.urlAfterRedirects);
                }
            });
	}
}
