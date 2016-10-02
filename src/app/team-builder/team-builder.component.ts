import { Component, OnInit, OnDestroy } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { MetaService, MetaModel } from '../meta';
import { Abilities, Piece, Skill, FilterSkill, DataService, MinifigList } from '../data/index';
import { MinifigPanelComponent, AbilitySelectComponent, PanelButtonComponent, AbilitySelection } from '../components/index';

@Component({
	moduleId: module.id,
	selector: 'team-builder',
	templateUrl: 'team-builder.component.html',
    styleUrls: ['team-builder.component.css'],
    directives: [ROUTER_DIRECTIVES, MinifigPanelComponent, AbilitySelectComponent, PanelButtonComponent]
})
export class TeamBuilderComponent implements OnInit {
    skills: FilterSkill[] = [];
    team = new MinifigList;
    proposedMinifigs = new MinifigList;
    teamSkills: Skill[] = [];
    extraSkills: number[] = [];
    sub: any;
    queryAbilities: string;

    currentSkillIndex: number = 0;
    
    urlAbilities: string;
    skip = false;

    private levelName: string;

    constructor(private route: ActivatedRoute,
                private data: DataService,
                private meta: MetaService) {

    }

    ngOnInit() {
        this.meta.set(<MetaModel>{
            title: 'Identify your characters to play with',
            description: '',
            image: '',
            canonical: '/team-builder'
        });
        this.sub = this.route.params.subscribe(params => {
            this.queryAbilities = params['abilities'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onAbilitiesChanged(selection: AbilitySelection) {
        this.urlAbilities = selection.urlParameter;
        this.skills = selection.abilities;
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

    addObvious() {
        while (this.proposedMinifigs.list.length == 1) {
            this.addMember(this.proposedMinifigs.list[0]);
        }
    }

    skipAbility() {
        if (this.currentSkillIndex < this.skills.length) {
            this.skills[this.currentSkillIndex].checked = false;  
            this.skip = true;
        }
    }

    private _updateProposal() {
        for (let skill of this.skills) {
            skill.fullfilled = (-1 !== this.team.getSkills().indexOf(skill.id));
        }

        //this.extraSkills = this._filter(this.team.getSkills(), this.skillIds);
        this.teamSkills = this.data.getSkills(this.extraSkills);

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

        let level = this.data.getLevels().getLevelByAbilities(this.urlAbilities);
        if (level === undefined) {
            this.levelName = "your custom selection";
        } else {
            if (level.builderComplete == this.urlAbilities) {
                this.levelName = "100% of " + level.name;
            } else {
                this.levelName = "Story of " + level.name;
            }
        }
        this.route.params['abilities'] = this.urlAbilities;
    }

    private _filter(input: number[], filter: number[]) {
        let output = [];
        for (let index of input) {
            if (-1 === filter.indexOf(index)) {
                output.push(index);
            }
        }
        return output;
    }
}
