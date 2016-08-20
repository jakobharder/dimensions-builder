import { Component, Input, Output, OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Skill, FilterSkill, DataService, Abilities } from './../data/index';

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
                filterSkill.checked = false;
                this.list.push(filterSkill);
            }
        }

        this.orderByProviders();
    }

    check(value: boolean) {
        for (let skill of this.list) {
            skill.checked = true;
        }        
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
export class AbilitySelectComponent implements OnInit, AfterViewInit {
    skillIds: number[] = [];
    skillLists: SkillList[] = [];
    skills: FilterSkill[] = [];

    @Output() changed: EventEmitter<FilterSkill[]> = new EventEmitter<FilterSkill[]>();

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        let list = new SkillList(this.dataService);
        list.init("main story", this.dataService.getMainAbilities(null).ids());
        list.check(true);
        this.skillLists.push(list);

        list = new SkillList(this.dataService);
        list.init("often needed", this.dataService.getImportantAbilities(new Abilities(this.getAllSkills())).ids());
        list.check(true);
        this.skillLists.push(list);

        list = new SkillList(this.dataService);
        list.init("unique", this.dataService.getUniqueAbilities(new Abilities(this.getAllSkills())).ids());
        this.skillLists.push(list);

        list = new SkillList(this.dataService);
        list.init("other", this.dataService.getAbilities(new Abilities(this.getAllSkills())).ids());
        this.skillLists.push(list);

        this.changed.emit(this.getAllSkills());
    }

    ngAfterViewInit() {
        this._updateRadios(0);
        this._updateRadios(1);
        this._updateRadios(2);
        this._updateRadios(3);
    }

    onChanged(index: number) {
        this.changed.emit(this.getAllSkills());

        this._updateRadios(index);
    }

    onGroupChanged(index: number, value: number, event) {
        let skills = this.skillLists[index];

        if (value == 0 || value == 1) {
            for (let skill of skills.list) {
                skill.checked = (value == 1);
            }
        }
        else {
            $('#abilityCollapse' + index).collapse('show');
            event.stopPropagation();
        }

        this.onChanged(index);
    }

    private _updateRadios(index: number) {
        let skills = this.skillLists[index];

        let checked = skills.list[0].checked;
        let allAreSame = true;
        for (let skill of skills.list) {
            allAreSame = allAreSame && (skill.checked == checked); 
        }
        let value = (allAreSame ? (checked ? 1 : 0) : 2);

        let radio = $('#option' + value + '-' + index);
        radio.prop("checked", true);
        radio.parent().parent().children('.active').removeClass("active");
        radio.parent().addClass("active");
    }

    private getAllSkills() {
        this.skills = [];
        for (let list of this.skillLists) {
            this.skills = this.skills.concat(list.list);
        }
        return this.skills;
    }
}