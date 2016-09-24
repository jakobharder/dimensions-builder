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
        abilitiesExtra: [Ability.Arcade], abilitiesStory: [Ability.Grapple, Ability.Magic, Ability.RelicDetector, Ability.Accelerator, Ability.Boomerang,
        Ability.Acrobat],
        // ranged attack (magic or boomerang)? // driving vehicle or flying
        walkthrough: 'http://www.ign.com/wikis/lego-dimensions/Follow_the_LEGO_Brick_Road' },

    { url: 'main-story-2-meltdown-at-sector-7g', name: 'Meltdown at Sector 7-G – The Simpsons', chapter: 2, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-3-elements-of-surprise', name: 'Elements of Surprise', chapter: 3, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-4-dalektable-adventure', name: 'A Dalektable Adventure', chapter: 4, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-5-painting-the-town-black', name: 'Painting the Town Black', chapter: 5, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-6-once-upon-a-time-machine-in-the-west', name: 'Once Upon A Time Machine in the West', chapter: 6, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-7-glad-to-see-you', name: 'GLaD to See You', chapter: 7, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-8-riddle-earth', name: 'Riddle-earth', chapter: 8, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-9-the-phantom-zone', name: 'The Phantom Zone', chapter: 9, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-10-all-your-bricks-are-belong-to-us', name: 'All Your Bricks Are Belong To Us', chapter: 10, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-11-mystery-mansion-mash-up', name: 'Mystery Mansion Mash-Up', chapter: 11, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-12-prime-time', name: 'Prime Time', chapter: 12, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-13-the-end-is-tri', name: 'The End is Tri', chapter: 13, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'main-story-14-the-final-dimension', name: 'The Final Dimension', chapter: 14, story: 'main story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'back-to-the-future-level', name: 'A Hill Valley Time Travel Adventure', chapter: 0, story: 'level pack',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'portal-2-level', name: 'Aperture Science', chapter: 0, story: 'level pack',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'doctor-who-level', name: 'An Adventure in Space and Time', chapter: 0, story: 'level pack',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'the-simpsons-level', name: 'The Mysterious Voyage of Homer', chapter: 0, story: 'level pack',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'ghostbusers-level', name: 'Ghostbusers Level', chapter: 0, story: 'level pack',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

    { url: 'midway-arcade-level', name: 'Midway Arcade Level', chapter: 0, story: 'level pack',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], walkthrough: '' },

];
