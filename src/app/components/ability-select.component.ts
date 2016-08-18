import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Skill, FilterSkill, DataService } from './../data/index';

class SkillList { 
    list: FilterSkill[] = [];
    
    constructor(private dataService: DataService) {
    }

    init(ids: number[]) {
        //let skills = this.dataService.getSkills(ids);
        let skills = this.dataService.getAllSkills();
        for (let skill of skills) {
            if (skill.providers.length > 0) {
                let filterSkill = Object.assign({}, skill);
                filterSkill.checked = true;
                this.list.push(filterSkill);
            }
        }

        this.orderByProviders();
    }

    orderByProviders() {
        this.list.sort(function(a, b) {
            return a.providers.length - b.providers.length;
        });
    }
}

@Component({
	moduleId: module.id,
	selector: 'ability-select',
	templateUrl: 'ability-select.component.html',
    styles: [''],
    directives: [ROUTER_DIRECTIVES]
})
export class AbilitySelectComponent implements OnInit {
    skillIds: number[] = [];
    skills: SkillList = new SkillList(this.dataService);

    @Output() changed: EventEmitter<FilterSkill[]> = new EventEmitter<FilterSkill[]>();

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.skills.init([46, 32, 36, 35, 31, 37, 38, 42]);
        this.changed.emit(this.skills.list);
    }

    onChanged() {
        this.changed.emit(this.skills.list);
    }
}
