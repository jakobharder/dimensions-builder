import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Event, NavigationEnd } from '@angular/router';
import { MetaService } from '../meta';

@Component({
	moduleId: module.id,
	selector: 'nav-section',
	templateUrl: './nav-section.component.html',
	directives: [ROUTER_DIRECTIVES]
})
export class NavSectionComponent {

}
