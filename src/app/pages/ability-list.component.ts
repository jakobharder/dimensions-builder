import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Skill, AbilitiesOrdered, DataService } from './../data/index';
import { MinifigTextlinkComponent } from './../components/index';

@Component({
	moduleId: module.id,
	selector: 'ability-list',
	templateUrl: 'ability-list.component.html',
    directives: [ROUTER_DIRECTIVES, MinifigTextlinkComponent]
})

export class AbilityListComponent implements OnInit {
    abilities: AbilitiesOrdered;

    constructor(private data: DataService) {
    }

    ngOnInit() {
        let abilities = this.data.getAbilities(null);
        this.abilities = abilities.getOrdered().byName();
    }
}
