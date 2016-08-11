import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

@Component({
	moduleId: module.id,
	selector: 'left-nav',
	templateUrl: 'sidebar.html',
	directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class SidebarComponent implements OnInit {
	isActive = false;
	showMenu: string = '';

	constructor(private router: Router) {}

	ngOnInit() {
		//var sidebar: any = $('.sidenav-outer');
		//sidebar.perfectScrollbar();
	}

	eventCalled() {
		this.isActive = !this.isActive;
	}

	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
}
