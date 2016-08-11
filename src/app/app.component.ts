import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

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
	constructor(private dataService: DataService) {

	}
}
