import { provideRouter, RouterConfig } from '@angular/router';

import {
	WaveListComponent,
	PackDetailsComponent,
	MinifigListComponent,
	MinifigDetailsComponent,
	SkillListComponent,
	HomeComponent
} from './pages/index';
import { TeamBuilderComponent } from './team-builder/index';


export const routes: RouterConfig = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent
	},
	{
		path: 'pack-list',
		component: WaveListComponent
	},
	{
		path: 'pack/:id',
		component: PackDetailsComponent
	},
	{
		path: 'minifig-list',
		component: MinifigListComponent
	},
	{
		path: 'minifig/:id',
		component: MinifigDetailsComponent
	},
	{
		path: 'ability-list',
		component: SkillListComponent
	},
	{
		path: 'team-builder',
		component: TeamBuilderComponent
	},
	{
		path: '**',
		redirectTo: '/'
	}
];
