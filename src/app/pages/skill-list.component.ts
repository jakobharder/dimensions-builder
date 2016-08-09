import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Skill, DataService } from './../data/index';
import { MinifigTextlinkComponent } from './../components/index';

@Component({
	moduleId: module.id,
	selector: 'skill-list',
	templateUrl: 'skill-list.component.html',
    directives: [ROUTER_DIRECTIVES, MinifigTextlinkComponent]
})

export class SkillListComponent implements OnInit {
    skills: Skill[];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.skills = this.dataService.getAllSkills();
    }
}
