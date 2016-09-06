import { Ability } from './static-abilities';

export class LevelData {
    url: string;
    name: string;
    story: string;
    chapter: number;
    abilitiesMinikits: number[];
    abilitiesRescue: number[];
    abilitiesExtra: number[];
    abilitiesStory: number[];
    walkthrough: string;
}

export const levels: LevelData[] = [
    { url: 'main-story-1-follow-the-lego-brick-road', name: 'Follow The Lego Brick Road – Wizard Of Oz', chapter: 1, story: 'main story',
        abilitiesMinikits: [Ability.SilverDestroy, Ability.Hacking, Ability.HazardCleaner, Ability.Grapple, Ability.RelicDetector, Ability.SuperStrength, Ability.Tracking, 
        Ability.TrapGhosts, Ability.SuspendGhost, Ability.Magic, Ability.Laser, Ability.TowBar], abilitiesRescue: [Ability.TrapGhosts, Ability.SuspendGhost, Ability.Laser], 
        abilitiesExtra: [Ability.Arcade], abilitiesStory: [Ability.Grapple],
        // ranged attack? // driving vehicle or flying
        walkthrough: 'http://www.ign.com/wikis/lego-dimensions/Follow_the_LEGO_Brick_Road' },

    { url: 'main-story-2-meltdown-at-sector-7g', name: 'Meltdown at Sector 7-G – The Simpsons', chapter: 2, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' }
];
