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
    private storyPacks: Pack[];
    private storyComments: string[];
    private levelPacks: Pack[];
    private levelComments: string[];
    private teamPacks: Pack[];
    private teamComments: string[];
    private funPacks: Pack[];
    private funComments: string[];
    
    constructor(private meta: MetaService,
                private data: DataService) {
    }
    
    ngOnInit() {
        this.title = "A Lego Dimensions Buyer's Guide to Year 2";
        this.meta.set(<MetaModel>{
            title: this.title,
            description: "An overview of all the Lego Dimensions packs coming in year 2 with recommendations which to buy."
        });

        this.storyPacks = this.data.getPacks([71253, 71242, 71264]);
        this.storyComments = ['', 
            'Abby Yates comes with many abilities like Rope Swings, Super Strength, Technology besides the Charge Transfer and obvious Ghostbusting abilities. If you consider to buy only very view Packs this is a good choice. Especially if you do not own the Ghostbusters Level Pack.', 
            ''];

        this.levelPacks = this.data.getPacks([71245, 71201, 71204, 71228, 71235, 71248, 71203, 90000, 71202, 71244]);
        this.levelComments = ['',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            'Sonic'];

        this.teamPacks = this.data.getPacks([71246, 71256, 71247, 71205, 71206]);
        this.teamComments = ['Needed for BMO Docks Ability. Jake has many abilities like Drilling, Digging, Super Strength and Dive.', 
            'Needed for Gremlins Adventure World', 
            'Parseltongue and Diffindo ability. Both of them are used in other levels to get minikits.', 
            'Jurassic World Adventure World. Not recommended if you do not care about 100% and Jurassic World. Get the Adventure Time Level Pack instead.', 
            'Scooby Doo Adventure World. Scooby Doo is the only character with Digging underwater. Adventure Time Team Pack may be a better choice.'];

        this.funPacks = this.data.getPacks([71251, 71237, 71223, 71238, 71258, 71286, 90001, 71234, 71241, 71221]);
        this.funComments = ['A-Team Adventure World and A-Team Master Build',
            'Atlantis Pool Ability. You gain only a single ability. I do not recommend him if you don\'t care about 100%.',
            'Chima Adventure World and Chi Ability',
            'Dive + Hacking Ability',
            'E.T. The Extra-Terrestrial Adventure World',
            'Knight Rider Adventure World',
            'Magic Walls Ability',
            'Ninjago Adventure World and Pole Vault',
            'Dive + Ghost Immunity Ability',
            'Wizard of Oz Adventure World. If you do not care about 100% and the Adventure World, then the Harry Potter Team Pack is a better choice. Lord Voldemort has the same abilities and more as the Wicked Witch.'];
    }
}
