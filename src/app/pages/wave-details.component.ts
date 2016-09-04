import {Component, Pipe, Injectable, PipeTransform, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';
import { Pack, DataService } from './../data/index';
import { PackComponent } from './../components/index';

@Pipe({
    name: 'wavesFilter',
    pure: false
})
@Injectable()
class WavesFilter implements PipeTransform {
    transform(items: Pack[], args: number): any {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.wave === args);
    }
}

@Pipe({
	name: 'packTypeOrder',
	pure: false
})
@Injectable()
class PackTypeOrder implements PipeTransform {
	transform(items: Pack[], args: string): any {
		return items.sort((a: Pack, b: Pack) => {
			if (a.type > b.type) {
				return 1;
			} else if (a.type < b.type) {
				return -1;
			} else {
				return 0;
			}
		});
	}
}

@Component({
	moduleId: module.id,
	selector: 'wave-details',
	templateUrl: 'wave-details.component.html',
	directives: [ROUTER_DIRECTIVES, PackComponent],
	pipes: [WavesFilter, PackTypeOrder],
})

export class WaveDetailsComponent implements OnInit {
	sub: any;
	waves: number[] = [];
	packs: Pack[];

	constructor(private route: ActivatedRoute,
				private router: Router, 
				private dataService: DataService,
				private title: Title) {
	}

	ngOnInit() {
		this.title.setTitle("List of all Lego Dimensions packs - Lego Dimensions Builder");

		this.sub = this.route.params.subscribe(params => {
			let id = +params['id'];
			this.waves = [id];
			this.packs = this.dataService.getAllPacks();
		});
	}

	gotoDetail(pack: Pack) {
		let link = ['/pack', pack.id];
		this.router.navigate(link);
	}
}
