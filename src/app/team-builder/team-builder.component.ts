import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Minifig, Skill, DataService } from '../data/index';
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
    skills: FilterSkill[];
    skillIds: number[];
    proposedMinifigs: Minifig[];
    team: Minifig[];
    teamSkills: Skill[];
    extraSkills: number[];

    currentSkillIndex: number;

    constructor(private route: ActivatedRoute,
                private dataService: DataService) {

    }

    ngOnInit() {
        this.skillIds = [46, 47, 32, 36, 26, 35, 31, 37, 38];
        let skills = this.dataService.getSkills(this.skillIds);
        this.skills = [];
        for (let skill of skills) {
            this.skills.push(Object.assign({}, skill));
        }

        this.currentSkillIndex = 0;
        this.team = [];
        this.extraSkills = [];

        this.updateProposal();
    }

    updateProposal() {
        this.proposedMinifigs = [];
        if (this.currentSkillIndex < this.skills.length) {
            let skill = this.skills[this.currentSkillIndex];

            for (let proposed of skill.providers) {
                if (!this.team.isMember(proposed)) {
                    this.proposedMinifigs.push(proposed);
                }
            }
        }
    }

    addMember(member: Minifig) {
        this.team.push(member);
        for (let skill of member.skills) {
            for (let filterSkill of this.skills) {
                if (filterSkill.id === skill.id) {
                    filterSkill.fullfilled = true;
                    break;
                }
            }

        }

        this.extraSkills = this.addFiltered(this.extraSkills, member.skills, this.skillIds);
        this.teamSkills = this.dataService.getSkills(this.extraSkills);

        while (this.currentSkillIndex < this.skills.length && this.skills[this.currentSkillIndex].fullfilled) {
            this.currentSkillIndex++;
        }
        this.updateProposal();
    }

    removeMember(member: Minifig) {
        // TODO
    }

    private addFiltered(array: number[], add: Skill[], filter: number[]) {
        for (let a of add) {
            if (!filter.includes(a.id)) {
                array.push(a.id);
            }
        }
        return array;
    }
}
