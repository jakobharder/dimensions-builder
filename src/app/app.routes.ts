import { provideRouter, RouterConfig } from '@angular/router';

import {
	WaveListComponent,
	PackDetailsComponent,
	MinifigListComponent,
	MinifigDetailsComponent,
	AbilityListComponent,
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
		path: 'packs',
		component: WaveListComponent
	},
	{
		path: 'pack/:id',
		component: PackDetailsComponent
	},
	{
		path: 'minifigs',
		component: MinifigListComponent
	},
	{
		path: 'minifig/:id',
		component: MinifigDetailsComponent
	},
	{
		path: 'abilities',
		component: AbilityListComponent
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
