import { provideRouter, RouterConfig } from '@angular/router';

import {
	WaveListComponent,
	WaveDetailsComponent,
	PackDetailsComponent,
	MinifigListComponent,
	MinifigDetailsComponent,
	AbilityListComponent,
	HomeComponent,
	AbilityDetailsComponent,
	LevelDetailsComponent
} from './pages/index';
import { TeamBuilderComponent } from './team-builder/index';


export const routes: RouterConfig = [
	{
		path: '',
		pathMatch: 'full',
		component: HomeComponent
	},
	{
		path: 'all-waves-and-packs',
		component: WaveListComponent
	},
	{
		path: 'wave/:id',
		component: WaveDetailsComponent
	},
	{
		path: 'pack/:id',
		component: PackDetailsComponent
	},
	{
		path: 'characters',
		component: MinifigListComponent
	},
	{
		path: 'character/:id',
		component: MinifigDetailsComponent
	},
	{
		path: 'abilities',
		component: AbilityListComponent
	},
	{
		path: 'ability/:id',
		component: AbilityDetailsComponent
	},
	{
		path: 'team-builder',
		component: TeamBuilderComponent
	},
	{
		path: 'level/:id',
		component: LevelDetailsComponent
	},
	{
		path: '**',
		redirectTo: '/'
	}
];
