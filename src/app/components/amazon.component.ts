import { Component, AfterViewInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'cmp-amazon',
	templateUrl: './amazon.component.html'
})
export class AmazonComponent implements AfterViewInit {
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
			let node = document.createElement('script');
			node.src = '//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US&adInstanceId=4571b6bb-3fbf-404a-989d-a3478d7891e0&storeId=dimensionsbui-20';
			node.type = 'text/javascript';
			node.async = true;
			node.charset = 'utf-8';
			document.getElementById('amazon-box').appendChild(node);
		} catch (e) {
		}
	}
}
