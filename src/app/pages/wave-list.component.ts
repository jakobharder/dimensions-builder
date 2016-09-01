import {Component, Pipe, Injectable, PipeTransform, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Pack, DataService } from './../data/index';
import { PackComponent } from './../components/index';

@Pipe({
    name: 'wavesFilter',
    pure: false
})
@Injectable()
export class WavesFilter implements PipeTransform {
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
export class PackTypeOrder implements PipeTransform {
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
	selector: 'wave-list',
	templateUrl: 'wave-list.component.html',
	directives: [ROUTER_DIRECTIVES, PackComponent],
	pipes: [WavesFilter, PackTypeOrder],
})

export class WaveListComponent implements OnInit {
	waves: number[] = [5, 4, 3, 2, 1];
	packs: Pack[];

	constructor(private router: Router, 
				private dataService: DataService,
				private title: Title) {
	}

	ngOnInit() {
		this.title.setTitle("List of all Lego Dimensions packs - Lego Dimensions Builder");
		this.packs = this.dataService.getAllPacks();
	}

	gotoDetail(pack: Pack) {
		let link = ['/pack', pack.id];
		this.router.navigate(link);
	}
}
