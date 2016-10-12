import { Component, OnInit } from '@angular/core';
import { MetaService, MetaModel } from './../meta';
import { PackTableComponent } from '../components/tables';
import { Pack, DataService } from '../data';
import { ShareSectionComponent, CommentSectionComponent, NavSectionComponent } from '../components';

@Component({
	moduleId: module.id,
	templateUrl: 'buyers-guide.component.html',
    directives: [PackTableComponent, ShareSectionComponent, CommentSectionComponent, NavSectionComponent]
})
export class BuyersGuideComponent implements OnInit {
    private title: string;
    private teamPacks: Pack[];
    private teamComments: string[];
    
    constructor(private meta: MetaService,
                private data: DataService) {
    }
    
    ngOnInit() {
        this.title = "A Lego Dimensions Buyer's Guide to Year 2";
        this.meta.set(<MetaModel>{
            title: this.title,
            description: "An overview of all the Lego Dimensions packs coming in year 2 with recommendations which to buy."
        });

        this.teamPacks = this.data.getPacks([71246, 71256, 71247, 71205, 71206]);
        this.teamComments = ['Needed for BMO Docks Ability. Jake has many abilities like Drilling, Digging, Super Strength and Dive.', 
            'Needed for Gremlins Adventure World', 
            'Parseltongue and Diffindo ability. Both of them are used in other levels to get minikits.', 
            'Jurassic World Adventure World. Not recommended if you do not care about 100% and Jurassic World. Get the Adventure Time Level Pack instead.', 
            'Scooby Doo Adventure World. Scooby Doo is the only character with Digging underwater. Adventure Time Team Pack may be a better choice.'];

        
    }
}
