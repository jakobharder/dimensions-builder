import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, Event, NavigationEnd } from '@angular/router';
import { MetaService } from '../meta';
import { ShareButtonComponent } from './basic';

@Component({
	moduleId: module.id,
	selector: 'share-section',
	templateUrl: './share-section.component.html',
	styles: [`share-button {
		float: left;
	}
    @media (max-width: 767px) {
        share-button {
            width: 50%;
			border-top: 1px solid #16203B;
        }
    }
    @media (min-width: 768px) {
        share-button {
            width: 25%;
        }
    }
	`],
	directives: [ShareButtonComponent]
})
export class ShareSectionComponent implements OnInit, OnDestroy {
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
			this.url = this.meta._safeurl;
		}
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
