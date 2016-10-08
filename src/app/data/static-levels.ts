import { Ability } from './static-abilities';
import { Franchise } from './data-types';

export class LevelData {
    url: string;
    name: string;
    story: string;
    chapter: number;
    abilitiesMinikits: number[];
    abilitiesRescue: number[];
    abilitiesExtra: number[];
    abilitiesStory: number[];
    access: number;
    walkthrough: string;
    year: number;
    franchise: Franchise;
    desc: string;
    image: string;
}

export const levels: LevelData[] = [
    <LevelData>{ url: 'adventure-time-level', name: 'A Book and a Bad Guy', chapter: 0, story: 'Year 2 Level Packs',
        abilitiesMinikits: [Ability.BMODocks, Ability.Flying, Ability.Diffindo, Ability.MasterBuild, Ability.Dive, Ability.ChargeTransfer], abilitiesRescue: [], abilitiesExtra: [],
        abilitiesStory: [Ability.Target, Ability.SwordSwitch, Ability.RopeSwings, Ability.Accelerator, Ability.VineCutting, Ability.RedDemonObjects, Ability.Grapple, Ability.Laser, Ability.LaserDeflector, Ability.Acrobat], 
        access: Ability.Level_AdventureTime, walkthrough: '', year: 2, franchise: Franchise.AdventureTime, 
        desc: 'If you play through this level you will gain Finn\'s Laser ability (Billy\'s Gauntlet). Also like with all Level packs, you have to play the level in order to get the build instructions for the Jakemobile and the Ancient War Elephant.',
        image: 'adventure-time-level' },

    <LevelData>{ url: 'mission-impossible-level', name: 'Mission: Impossible', chapter: 0, story: 'Year 2 Level Packs',
        abilitiesMinikits: [Ability.RelicDetector, Ability.Parseltongue, Ability.Laser, Ability.Intelligence, Ability.MiniAccess, Ability.SonarSmash, Ability.Boomerang, Ability.Digging, Ability.SlurpAccess, Ability.ChargeTransfer, Ability.MasterBuild, Ability.Magic], abilitiesRescue: [Ability.Magic,, Ability.Drilling, Ability.TargetPlusSilver], abilitiesExtra: [],
        abilitiesStory: [Ability.Grapple, Ability.SilverDestroy, Ability.FuseBox, Ability.Disguise, Ability.Technology, Ability.Stealth, Ability.Accelerator, Ability.TowBar, Ability.MagnoGloves, Ability.Acrobat /* or fly */, Ability.XRay, Ability.Target, Ability.FlyingDrone],
        access: Ability.MissionImpossibleLevel, walkthrough: '', year: 2, franchise: Franchise.MissionImpossible,
        desc: 'You have to play the level in order to get the build instructions for the IMF Scrambler and the IMF Sport Car.',
        image: 'mission-impossible-level' },

    <LevelData>{ url: 'back-to-the-future-level', name: 'Back to the Future', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.Laser, Ability.Drone, Ability.Grapple, Ability.Boomerang, Ability.Magic, Ability.Digging, Ability.Drilling, Ability.SilverDestroy, Ability.Atlantis], abilitiesRescue: [Ability.Magic], abilitiesExtra: [Ability.Arcade, Ability.FixIt], 
        abilitiesStory: [Ability.SonarSmash, Ability.Accelerator, Ability.TimeTravel, Ability.HoverOrFlying, Ability.BackToTheFutureLevel], 
        access: Ability.BackToTheFutureLevel, walkthrough: 'https://www.youtube.com/watch?v=6X6F7J2aZxo', year: 1, franchise: Franchise.BackToTheFuture,
        desc: undefined,
        image: 'back-to-the-future-level' }, /* Marty McFly, car */

    <LevelData>{ url: 'portal-2-level', name: 'Aperture Science', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.LaserDeflector, Ability.XRay, Ability.Flying, Ability.Target, Ability.Grapple, Ability.Boomerang, Ability.Illumination, Ability.RelicDetector, Ability.Laser, Ability.VineCutting], abilitiesRescue: [Ability.Chi], abilitiesExtra: [], abilitiesStory: [Ability.PortalGun, Ability.WeightSwitch, Ability.SentryTurret], 
        access: Ability.Level_Portal2, walkthrough: '', year: 1, franchise: Franchise.Portal2 }, /* chell, turret */

    <LevelData>{ url: 'doctor-who-level', name: 'The Dalek Extermination of Earth', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.VineCutting, Ability.RelicDetector, Ability.Grapple, Ability.Magic, Ability.Digging, Ability.Laser, Ability.MasterBuild, Ability.Boomerang, Ability.Stealth, Ability.Electricity], abilitiesRescue: [Ability.WaterSpray, Ability.Magic], abilitiesExtra: [], abilitiesStory: [Ability.FixIt, Ability.Tardis, Ability.SilverDestroy, Ability.Technology, Ability.Stealth, Ability.Flying], 
        access: Ability.Level_DoctorWho, walkthrough: '', year: 1, franchise: Franchise.DoctorWho }, /* water spray or ice */

    <LevelData>{ url: 'the-simpsons-level', name: 'The Mysterious Voyage of Homer', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.Tracking, Ability.RelicDetector, Ability.Laser, Ability.Hacking, Ability.Tardis, Ability.Technology, Ability.PortalGun /* or fly */, Ability.WeightSwitch], abilitiesRescue: [Ability.Atlantis], abilitiesExtra: [Ability.Gyrosphere, Ability.Chi, Ability.PoleVault, Ability.Acrobat], 
        abilitiesStory: [Ability.SonarSmash, Ability.SimpsonsLevel, Ability.TowBar, Ability.SuperStrength, Ability.SilverDestroy, Ability.Magic, Ability.Accelerator /* vehicle */, Ability.TauntEnemies], 
        access: Ability.SimpsonsLevel, walkthrough: '', year: 1, franchise: Franchise.TheSimpsons,
        image: 'simpsons-level' },
        /* extra gyrosphete, target, chima, poul valt, acrobat */
        /* atlantis is for rescue? */

    <LevelData>{ url: 'ghostbusters-level', name: 'Ghostbusters!', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.RelicDetector, Ability.Drone, Ability.Magic, Ability.XRay, Ability.Technology, Ability.SuperStrength, Ability.LaserDeflector, Ability.Grapple, Ability.Drilling, Ability.CargoHook], abilitiesRescue: [Ability.RelicDetector, Ability.Drone], abilitiesExtra: [Ability.HazardCleaner], 
        abilitiesStory: [Ability.Laser, Ability.Accelerator, Ability.SuspendGhost, Ability.TrapGhosts, Ability.GhostbustersLevel], 
        access: Ability.GhostbustersLevel, walkthrough: '', year: 1, franchise: Franchise.Ghostbusters,
        desc: 'You have to play the level in order to get the build instructions for the Ecto-1 and the Ghost Trap.',
        image: 'ghostbusters-level' },

    <LevelData>{ url: 'midway-arcade-level', name: 'Retro Wreckage', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.Grapple, Ability.XRay, Ability.SonarSmash, Ability.Drone, Ability.FlightDock, Ability.Magic, Ability.RelicDetector, Ability.FixIt, Ability.CargoHook], abilitiesRescue: [Ability.Digging], abilitiesExtra: [Ability.TowBar, Ability], 
        abilitiesStory: [Ability.Invulnerability, Ability.MidwayArcadeLevel, Ability.Accelerator, Ability.Arcade, Ability.Invisibility, Ability.Laser, Ability.Speed, Ability.SuperStrength, Ability.Stealth], 
        access: Ability.MidwayArcadeLevel, walkthrough: '', year: 1, franchise: Franchise.MidwayArcade,
        desc: 'You have to play the level in order to get the build instructions for the Arcade Machine and the Spy Hunter.',
        image: 'midway-arcade-level' },
        
    <LevelData>{ url: 'main-story-1-follow-the-lego-brick-road', name: 'Follow The Lego Brick Road – Wizard Of Oz', chapter: 1, story: 'Main Story',
        abilitiesMinikits: [Ability.SilverDestroy, Ability.Hacking, Ability.HazardCleaner, Ability.Grapple, Ability.RelicDetector, Ability.SuperStrength, Ability.Tracking, 
        Ability.TrapGhosts, Ability.SuspendGhost, Ability.Magic, Ability.Laser, Ability.TowBar], abilitiesRescue: [Ability.TrapGhosts, Ability.SuspendGhost, Ability.Laser], 
        abilitiesExtra: [Ability.Arcade], abilitiesStory: [Ability.Grapple, Ability.Magic, Ability.RelicDetector, Ability.Accelerator, Ability.Boomerang,
        Ability.Acrobat],
        // ranged attack (magic or boomerang)? // driving vehicle or flying
        access: -1, walkthrough: 'http://www.ign.com/wikis/lego-dimensions/Follow_the_LEGO_Brick_Road', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-2-meltdown-at-sector-7g', name: 'Meltdown at Sector 7-G – The Simpsons', chapter: 2, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-3-elements-of-surprise', name: 'Elements of Surprise', chapter: 3, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-4-dalektable-adventure', name: 'A Dalektable Adventure', chapter: 4, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-5-painting-the-town-black', name: 'Painting the Town Black', chapter: 5, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-6-once-upon-a-time-machine-in-the-west', name: 'Once Upon A Time Machine in the West', chapter: 6, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-7-glad-to-see-you', name: 'GLaD to See You', chapter: 7, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-8-riddle-earth', name: 'Riddle-earth', chapter: 8, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-9-the-phantom-zone', name: 'The Phantom Zone', chapter: 9, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-10-all-your-bricks-are-belong-to-us', name: 'All Your Bricks Are Belong To Us', chapter: 10, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-11-mystery-mansion-mash-up', name: 'Mystery Mansion Mash-Up', chapter: 11, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-12-prime-time', name: 'Prime Time', chapter: 12, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-13-the-end-is-tri', name: 'The End is Tri', chapter: 13, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

    <LevelData>{ url: 'main-story-14-the-final-dimension', name: 'The Final Dimension', chapter: 14, story: 'Main Story',
        abilitiesMinikits: [], abilitiesRescue: [], abilitiesExtra: [], abilitiesStory: [], access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions },

];
