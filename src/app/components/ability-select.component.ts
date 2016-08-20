import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Skill, FilterSkill, DataService } from './../data/index';

class SkillList { 
    list: FilterSkill[] = [];
    name: string;
    
    constructor(private dataService: DataService) {
    }

    init(name: string, ids: number[]) {
        this.name = name;
        
        let skills = this.dataService.getSkills(ids);
        //let skills = this.dataService.getAllSkills();
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
    styleUrls: ['ability-select.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class AbilitySelectComponent implements OnInit {
    skillIds: number[] = [];
    skillLists: SkillList[] = [];
    skills: FilterSkill[] = [];

    @Output() changed: EventEmitter<FilterSkill[]> = new EventEmitter<FilterSkill[]>();

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        let list = new SkillList(this.dataService);
        list.init("main story", [46, 32, 36, 35, 31, 37, 38, 42]);
        this.skillLists.push(list);

        list = new SkillList(this.dataService);
        list.init("often needed", [2, 4, 5, 6, 7, 10, 12, 13, 14, 17, 18]);
        this.skillLists.push(list);

        this.changed.emit(this.getAllSkills());
    }

    onChanged() {
        this.changed.emit(this.getAllSkills());
    }

    private getAllSkills() {
        this.skills = [];
        for (let list of this.skillLists) {
            this.skills = this.skills.concat(list.list);
        }
        return this.skills;
    }
}
