import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Event, NavigationEnd } from '@angular/router';
import { MetaService } from '../meta';

@Component({
	moduleId: module.id,
	selector: 'comment-section',
	templateUrl: './comment-section.component.html'
})
export class CommentSectionComponent implements OnInit, OnDestroy {
	private url: string;
	private sub: any;

	constructor(private meta: MetaService) {
	}

	ngOnInit() {
        this.sub = this.meta.url.subscribe(
            (url: string) => {
				this.url = url;
		});
		if (this.meta._url !== undefined) {
			this.url = this.meta._url;
		}
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
