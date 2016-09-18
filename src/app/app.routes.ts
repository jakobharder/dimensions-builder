import { provideRouter, RouterConfig } from '@angular/router';

import {
	WaveListComponent,
	WaveDetailsComponent,
	PackDetailsComponent,
	CharacterListComponent,
	CharacterDetailsComponent,
	AbilityListComponent,
	AbilityListType,
	HomeComponent,
	AbilityDetailsComponent,
	LevelDetailsComponent
} from './pages';
import {
	Year2Component
} from './blog';
import { TeamBuilderComponent } from './team-builder';

export const routes: RouterConfig = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'all-waves-and-packs', component: WaveListComponent },
	{ path: 'wave/:id', component: WaveDetailsComponent },
	{ path: 'pack/:id', component: PackDetailsComponent },
	{ path: 'characters', component: CharacterListComponent },
	{ path: 'character/:id', component: CharacterDetailsComponent },
	{ path: 'abilities', component: AbilityListComponent, data: { type: AbilityListType.All } },
	{ path: 'rare-abilities', component: AbilityListComponent, data: { type: AbilityListType.Rare } },
	{ path: 'combo-abilities', component: AbilityListComponent, data: { type: AbilityListType.Combos } },
	{ path: 'ability/:id', component: AbilityDetailsComponent },
	{ path: 'team-builder', component: TeamBuilderComponent },
	{ path: 'team-builder/level/:level' , component: TeamBuilderComponent },
	{ path: 'team-builder/level/:level/:team' , component: TeamBuilderComponent },
	{ path: 'team-builder/:abilities', component: TeamBuilderComponent },
	{ path: 'team-builder/:abilities/:team', component: TeamBuilderComponent },
	{ path: 'level/:id', component: LevelDetailsComponent },
	{ path: 'all-year2-packs-and-characters', component: Year2Component },
	{ path: '**', redirectTo: '/' }
];
