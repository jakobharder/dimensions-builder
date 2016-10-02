import { Component, Pipe, Injectable, PipeTransform, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { MetaService, MetaModel } from '../meta';
import { Wave, DataService } from '../data';
import { ShareSectionComponent } from '../components';
import { PackTableComponent } from '../components/tables';

@Component({
	moduleId: module.id,
	selector: 'page-wave-list',
	templateUrl: 'wave-list.component.html',
	directives: [ROUTER_DIRECTIVES, PackTableComponent, ShareSectionComponent],
})
export class WaveListComponent implements OnInit {
	private waves: Wave[] = [];
	private description: string;

	constructor(private router: Router, 
				private dataService: DataService,
				private meta: MetaService) {
	}

	ngOnInit() {
		this.waves = this.dataService.getWaves();

		let releasedWaves = 0;
		let releasedPacks = 0;
		for (let wave of this.waves) {
			if (wave.released) {
				releasedPacks += wave.packs.length;
				releasedWaves ++;
			}
		}

		let desc = "There are currently " + releasedPacks + " packs released in " + releasedWaves + " waves.";
		this.description = desc;

		this.meta.set(<MetaModel>{
			title: "Complete list of all Lego Dimensions packs",
			description: desc
		});	
	}
}
