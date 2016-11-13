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
        this.storyComments = ['Will be released with wave 7 in November 2016.', 
            'Abby Yates comes with many abilities like Rope Swings, Super Strength, Technology besides the Charge Transfer and obvious Ghostbusting abilities. If you consider to buy only very view Packs this is a good choice. Especially if you do not own the Ghostbusters Level Pack.', 
            'Will be released with wave 7.5 in February 2017'];

        this.levelPacks = this.data.getPacks([71245, 71201, 71204, 71228, 71235, 71248, 71203, 90000, 71202, 71244]);
        this.levelComments = ['',
            'If you are not a completionist then buy the Doc Brown Fun Pack instead. No unique abilities come with this Level Pack. You can get Back to the Future Adventure World access and Time Travel with the Doc Brown Fun Pack as well.',
            'Absolutely recommended! In many levels and worlds the Tardis is used to get to secret areas giving you much play value outside of the actual level pack contents.',
            '',
            '',
            '',
            '',
            '',
            '',
            ''];

        this.teamPacks = this.data.getPacks([71246, 71256, 71247, 71205, 71206]);
        this.teamComments = ['Needed for BMO Docks Ability. Jake has many abilities like Drilling, Digging, Super Strength and Dive.', 
            'Needed for Gremlins Adventure World', 
            'Parseltongue and Diffindo ability. Both of them are used in other levels to get minikits.', 
            'Jurassic World Adventure World. Not recommended if you do not care about 100% and Jurassic World. Get the Adventure Time Level Pack instead.', 
            'Scooby Doo Adventure World. Scooby Doo is the only character with Digging underwater. Adventure Time Team Pack may be a better choice.'];

        this.funPacks = this.data.getPacks([71251, 71237, 71223, 71238, 71258, 71286, 90001, 71234, 71241, 71221]);
        this.funComments = ['Needed for A-Team Adventure World and A-Team Master Build.',
            'Needed for Atlantis Pool Ability. You gain only one single ability. I do not recommend him if you don\'t care about 100%.',
            'Needed for Chima Adventure World and Chi Ability.',
            'Needed for Dive + Hacking Ability. Cyberman is otherwise an excellent character with many abilities like Technology, Hacking, Dive, Drone Access and more.',
            'Needed for E.T. The Extra-Terrestrial Adventure World.',
            'Needed for Knight Rider Adventure World.',
            'Needed for Magic Walls ability.',
            'Needed for Ninjago Adventure World and Pole Vault. You could use different Fun Packs to achieve the same.',
            'Needed for Dive + Ghost Immunity ability.',
            'Needed for Wizard of Oz Adventure World. If you do not care about 100% and the Adventure World, then the Harry Potter Team Pack is a better choice. Lord Voldemort has the same abilities and more as the Wicked Witch.'];
    }
}
