import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { MetaService, MetaModel } from '../meta';
import { Piece, Wave, DataService } from '../data';
import { PackTableComponent, PieceTableComponent } from '../components/tables';

@Component({
	moduleId: module.id,
	selector: 'page-wave-details',
	templateUrl: 'wave-details.component.html',
	styles: [`.wave-img {
		max-height: 200px;
		max-width: 100%;
	}`],
	directives: [ROUTER_DIRECTIVES, PackTableComponent, PieceTableComponent],
})
export class WaveDetailsComponent implements OnInit {
	private sub: any;
	private wave: Wave;
	private description: string;
	private characters: Piece[] = [];
	private builds: Piece[] = [];

	constructor(private route: ActivatedRoute,
				private data: DataService,
				private meta: MetaService) {
	}

	ngOnInit() {
		this.meta.set(<MetaModel>{
			title: 'List of all Lego Dimensions packs'
		});

		this.sub = this.route.params.subscribe(params => {
			let id = +params['id'];
			this.wave = this.data.getWave(id);

			let numCharacters = 0;
			let numBuilds = 0;
			for (let pack of this.wave.packs) {
				let characters = this.data.getMinifigs(pack.minifigs);
				let builds = this.data.getBuilds(pack.builds);
				numCharacters += characters.length;
				numBuilds += pack.builds.length;

				this.characters = this.characters.concat(characters);
				this.builds = this.builds.concat(builds);
			}

			let desc = "Wave " + this.wave.number + " contains " + this.wave.packs.length + " packs, " + numCharacters + " characters and " + numBuilds + " builds.";
			if (this.wave.released) {
				desc += " Wave " + this.wave.number + " was released in " + this.wave.release + " as part of the year " +
					this.wave.year + " waves.";
			} else {
				desc += " Wave " + this.wave.number + " will be released in " + this.wave.release + " as part of the year " +
					this.wave.year + " waves.";
			}
			this.description = desc;

			this.meta.set(<MetaModel>{
				title: "All packs in wave " + this.wave.number,
				description: desc,
				image: '/assets/images/' + this.wave.image + '.jpg'
			});	
		});
	}
}
