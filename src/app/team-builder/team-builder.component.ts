import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Minifig, Skill, DataService, MinifigList } from '../data/index';
import { MinifigPanelComponent } from '../components/index';

class FilterSkill extends Skill {
    fullfilled: boolean = false;
};

@Component({
	moduleId: module.id,
	selector: 'team-builder',
	templateUrl: 'team-builder.component.html',
    directives: [ROUTER_DIRECTIVES, MinifigPanelComponent]
})
export class TeamBuilderComponent implements OnInit {
    skills: FilterSkill[] = [];
    skillIds: number[] = [];
    team = new MinifigList;
    proposedMinifigs = new MinifigList;
    teamSkills: Skill[] = [];
    extraSkills: number[] = [];

    currentSkillIndex: number = 0;

    constructor(private route: ActivatedRoute,
                private dataService: DataService) {

    }

    ngOnInit() {
        this.skillIds = [46, 47, 32, 36, 26, 35, 31, 37, 38];
        let skills = this.dataService.getSkills(this.skillIds);
        for (let skill of skills) {
            this.skills.push(Object.assign({}, skill));
        }

        this._updateProposal();
    }

    addMember(member: Minifig) {
        this.team.add(member);
        this._updateProposal();
    }

    removeMember(member: Minifig) {
        this.team.remove(member);
        this._updateProposal();
    }

    private _updateProposal() {
        for (let skill of this.skills) {
            skill.fullfilled = (-1 !== this.team.getSkills().indexOf(skill.id));
        }

        this.extraSkills = this._filter(this.team.getSkills(), this.skillIds);
        this.teamSkills = this.dataService.getSkills(this.extraSkills);

        this.currentSkillIndex = 0;
        while (this.currentSkillIndex < this.skills.length && this.skills[this.currentSkillIndex].fullfilled) {
            this.currentSkillIndex++;
        }

        this.proposedMinifigs.clear();

        if (this.currentSkillIndex < this.skills.length) {
            let skill = this.skills[this.currentSkillIndex];

            for (let proposed of skill.providers) {
                if (!this.team.contains(proposed)) {
                    this.proposedMinifigs.add(proposed);
                }
            }
        }
    }

    private _filter(input: number[], filter: number[]) {
        let output = [];
        for (let i of input) {
            if (-1 === filter.indexOf(i)) {
                output.push(i);
            }
        }
        return output;
    }
}
