import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Piece, Skill, FilterSkill, DataService, MinifigList } from '../data/index';
import { MinifigPanelComponent, AbilitySelectComponent } from '../components/index';

@Component({
	moduleId: module.id,
	selector: 'team-builder',
	templateUrl: 'team-builder.component.html',
    directives: [ROUTER_DIRECTIVES, MinifigPanelComponent, AbilitySelectComponent]
})
export class TeamBuilderComponent implements OnInit {
    skills: FilterSkill[] = [];
    team = new MinifigList;
    proposedMinifigs = new MinifigList;
    teamSkills: Skill[] = [];
    extraSkills: number[] = [];

    currentSkillIndex: number = 0;

    constructor(private route: ActivatedRoute,
                private dataService: DataService,
                private title: Title) {

    }

    ngOnInit() {
        this.title.setTitle("Team Builder - which character, vehicle and gadget to use");
    }

    onAbilitiesChanged(skills: FilterSkill[]) {
        this.skills = skills;
        this._updateProposal();
    }

    addMember(member: Piece) {
        this.team.add(member);
        this._updateProposal();
    }

    removeMember(member: Piece) {
        this.team.remove(member);
        this._updateProposal();
    }

    private _updateProposal() {
        for (let skill of this.skills) {
            skill.fullfilled = (-1 !== this.team.getSkills().indexOf(skill.id));
        }

        //this.extraSkills = this._filter(this.team.getSkills(), this.skillIds);
        this.teamSkills = this.dataService.getSkills(this.extraSkills);

        this.currentSkillIndex = 0;
        while (this.currentSkillIndex < this.skills.length && 
            (this.skills[this.currentSkillIndex].fullfilled || !this.skills[this.currentSkillIndex].checked)) {
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
