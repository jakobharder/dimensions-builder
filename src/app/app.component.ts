import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Event, NavigationEnd } from '@angular/router';
declare let ga:Function;
var window: Window;

import { TopNavComponent } from './shared';
import { DataService } from './data';
import { MetaService } from './meta';
import { ShareSectionComponent, CommentSectionComponent, NavSectionComponent } from './components';

@Component({
	moduleId: module.id,
	selector: 'dimensions-builder',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [ROUTER_DIRECTIVES, TopNavComponent, ShareSectionComponent, CommentSectionComponent, NavSectionComponent],
	providers: [DataService, MetaService]
})
export class AppComponent {
	private sub: any;

	constructor(public router: Router, 
				private dataService: DataService,
				private meta: MetaService) {
	}

	ngOnInit() {
        this.sub = this.router.events.subscribe(
            (event:Event) => {
                if (event instanceof NavigationEnd) {
					if (typeof ga === "function") {
						ga('send', 'pageview', event.urlAfterRedirects);
					}
					if (window) {
						window.scroll(0, 0);
					}
                }
            });
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
