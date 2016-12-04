import { Component, AfterViewInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'cmp-ads',
	templateUrl: './ads.component.html'
})
export class AdsComponent implements AfterViewInit {
	isServer: boolean;

	constructor() {
		try {
			if (typeof document === 'undefined') {
				this.isServer = true;
			}
		} catch (e) {}
	}

	ngAfterViewInit() {
		try {
			(adsbygoogle = window.adsbygoogle || []).push({});
		} catch (e) {
		}
	}
}
