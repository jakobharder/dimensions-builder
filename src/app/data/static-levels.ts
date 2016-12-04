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
    storyVideo: string;
    fullVideo: string;
    quickVideo: string;
    icon: boolean;
    lastUpdate: string;
}

export const levels: LevelData[] = [
    <LevelData>{ url: 'adventure-time-level', name: 'A Book and a Bad Guy', chapter: 0, story: 'Year 2 Level Packs',
        abilitiesMinikits: [Ability.BMODocks, Ability.Diffindo, Ability.MasterBuild, Ability.Dive, Ability.ChargeTransfer], 
        abilitiesRescue: [Ability.MagicWalls], 
        abilitiesExtra: [],
        abilitiesStory: [Ability.Target, Ability.SwordSwitch, Ability.RopeSwings, Ability.Accelerator, Ability.VineCutting, Ability.RedDemonObjects, Ability.Grapple, Ability.Laser, Ability.LaserDeflector, Ability.Acrobat], 
        access: Ability.Level_AdventureTime, walkthrough: '', year: 2, franchise: Franchise.AdventureTime, 
        desc: 'If you play through this level you will gain Finn\'s Laser ability (Billy\'s Gauntlet). Also like with all Level packs, you have to play the level in order to get the build instructions for the Jakemobile and the Ancient War Elephant.',
        image: 'adventure-time-level',
        fullVideo: '8WIV1MA-hhg',
        lastUpdate: 'Nov 13, 2016'
    },

    <LevelData>{ url: 'mission-impossible-level', name: 'Mission: Impossible', chapter: 0, story: 'Year 2 Level Packs',
        abilitiesMinikits: [Ability.RelicDetector, Ability.Parseltongue, Ability.Laser, Ability.Intelligence, Ability.MiniAccess, Ability.SonarSmash, Ability.Boomerang, Ability.Digging, Ability.SlurpAccess, Ability.ChargeTransfer, Ability.MasterBuild, Ability.Magic], 
        abilitiesRescue: [Ability.Magic,, Ability.Drilling, Ability.TargetPlusSilver], 
        abilitiesExtra: [],
        abilitiesStory: [Ability.Grapple, Ability.SilverDestroy, Ability.FuseBox, Ability.Disguise, Ability.Technology, Ability.Stealth, Ability.Accelerator, Ability.TowBar, Ability.MagnoGloves, Ability.Acrobat /* or fly */, Ability.XRay, Ability.Target, Ability.FlyingDrone],
        access: Ability.MissionImpossibleLevel, walkthrough: '', year: 2, franchise: Franchise.MissionImpossible,
        desc: 'You have to play the level in order to get the build instructions for the IMF Scrambler and the IMF Sport Car.',
        image: 'mission-impossible-level',
        fullVideo: 'fG66-JlOJDE',
        quickVideo: 'IvOCseETdKM',
        lastUpdate: 'Nov 13, 2016'
    },
    
    <LevelData>{ url: 'adventure-time-adventure-world', name: 'Adventure Time World', chapter: 0, story: 'Year 2 Adventure Worlds',
        abilitiesMinikits: [Ability.SwordSwitch, Ability.Laser, Ability.Target, Ability.Tardis, Ability.Magic, Ability.Technology, Ability.SonarSmash, Ability.SilverDestroy, Ability.RelicDetector, Ability.Grapple, Ability.FixIt, Ability.Accelerator, Ability.DivePlusLaser, Ability.SlurpAccess, 
        Ability.Parseltongue, Ability.Diffindo, Ability.DivePlusSuperStrength, Ability.DivePlusBoomerang, Ability.DivePlusGrapple, Ability.Tracking, Ability.TowBar, Ability.MasterBuild, Ability.DivePlusSilverDestroy, Ability.Intelligence, Ability.RainbowLego, 
        Ability.RedDemonObjects, Ability.BMODocks, Ability.VineCutting, Ability.RopeSwings, Ability.Acrobat, Ability.DivePlusFuseBox, Ability.Drilling, Ability.DivePlusChi, Ability.LaserDeflector, Ability.Flying], 
        abilitiesRescue: [], 
        abilitiesExtra: [],
        abilitiesStory: [], 
        access: Ability.Adventure_AdventureTime, walkthrough: '', year: 2, franchise: Franchise.AdventureTime, 
        desc: '',
        lastUpdate: 'Nov 13, 2016'
    },
    
    <LevelData>{ url: 'a-team-adventure-world', name: 'A-Team World', chapter: 0, story: 'Year 2 Adventure Worlds',
        abilitiesMinikits: [Ability.ChargeTransfer, Ability.SuperStrengthHandles, Ability.LaserDeflector, Ability.FixIt, Ability.ATeamMasterBuild, Ability.Accelerator, 
        Ability.Grapple, Ability.Magic, Ability.SuperStrength, Ability.HazardCleaner, Ability.CargoHook, Ability.SwordSwitch, Ability.XRay, Ability.Diffindo, Ability.SonarSmash, 
        Ability.MagicWalls, Ability.SilverDestroy, Ability.Parseltongue, Ability.FlyingTowBar, Ability.TowBar, Ability.Intelligence, Ability.BMODocks, Ability.Electricity, 
        Ability.RelicDetector, Ability.Acrobat], 
        abilitiesRescue: [], 
        abilitiesExtra: [/*Ability.SlurpAccess, Ability.Laser*/],
        abilitiesStory: [], 
        access: Ability.Adventure_ATeam, walkthrough: '', year: 2, franchise: Franchise.ATeam, 
        desc: '',
        lastUpdate: 'Nov 13, 2016'
    },
    
    <LevelData>{ url: 'ghostbusters-2016-adventure-world', name: 'Ghostbusters 2016 World', chapter: 0, story: 'Year 2 Adventure Worlds',
        abilitiesMinikits: [Ability.Laser, Ability.FixIt, Ability.SuperStrengthHandles, Ability.SuspendGhost, Ability.TrapGhosts, Ability.Intelligence, Ability.Magic,
        Ability.Boomerang, Ability.PKEMeter, Ability.RelicDetector, Ability.Disguise, Ability.Digging, Ability.WeightSwitch, Ability.HazardCleaner, Ability.Diffindo,
        Ability.Illumination, Ability.SuperStrength, Ability.Parseltongue, Ability.Stealth, Ability.FlyingTowBar, Ability.Dive, Ability.XRay, Ability.Electricity,
        Ability.Grapple, Ability.Accelerator, Ability.WaterSpray], 
        abilitiesRescue: [], 
        abilitiesExtra: [],
        abilitiesStory: [], 
        access: Ability.Adventure_Ghostbusters2016, walkthrough: '', year: 2, franchise: Franchise.Ghostbusters2016, 
        desc: '',
        lastUpdate: 'Nov 13, 2016'
    },
    
    <LevelData>{ url: 'harry-potter-adventure-world', name: 'Harry Potter World', chapter: 0, story: 'Year 2 Adventure Worlds',
        abilitiesMinikits: [Ability.Magic, Ability.Intelligence, Ability.Acrobat, Ability.RelicDetector, Ability.SuspendGhost, Ability.TrapGhosts, Ability.HazardCleaner, 
        Ability.Grapple, Ability.Laser /* or fire */, Ability.Chi, Ability.MasterBuild, Ability.Flying, Ability.Disguise, Ability.Spinjitzu, Ability.Accelerator, 
        Ability.Parseltongue, Ability.Diffindo, Ability.DivePlusTechnology, Ability.FuseBox, Ability.PortalGun, Ability.Digging, Ability.Hacking], 
        abilitiesRescue: [], 
        abilitiesExtra: [/*Ability.SilverDestroy, Ability.SonarSmash*/],
        abilitiesStory: [], 
        access: Ability.Adventure_HarryPotter, walkthrough: '', year: 2, franchise: Franchise.HarryPotter, 
        desc: '',
        lastUpdate: 'Nov 13, 2016'
    },
    
    <LevelData>{ url: 'mission-impossible-adventure-world', name: 'Mission: Impossible World', chapter: 0, story: 'Year 2 Adventure Worlds',
        abilitiesMinikits: [Ability.Flying, Ability.MagnoGloves, Ability.Acrobat, Ability.FuseBox, Ability.Hacking, Ability.SonarSmash, Ability.FixIt, Ability.XRay, 
        Ability.DivePlusCargo, Ability.DivePlusDrone, Ability.WaterSprayOrIce, Ability.Parseltongue, Ability.ATeamMasterBuild, Ability.SwordSwitch, Ability.LaserDeflector,
        Ability.FuseBox, Ability.DivePlusDock, Ability.SilverDestroy, Ability.MiniAccess, Ability.SuperStrengthHandles, Ability.Grapple, Ability.Illumination, 
        Ability.RelicDetector, Ability.Drone, Ability.Accelerator, Ability.Technology, Ability.Disguise, Ability.Stealth, Ability.Dive, Ability.Digging, Ability.MasterBuild,
        Ability.Intelligence], 
        abilitiesRescue: [], 
        abilitiesExtra: [/*Ability.SlurpAccess, Ability.RainbowLego*/],
        abilitiesStory: [], 
        access: Ability.MissionImpossibleWorld, walkthrough: '', year: 2, franchise: Franchise.MissionImpossible, 
        desc: '',
        lastUpdate: 'Nov 13, 2016'
    },

    <LevelData>{ url: 'ghostbusters-1', name: 'Paranormal Beginnings', chapter: 1, story: 'Ghostbusters 2016',
        abilitiesMinikits: [Ability.RelicDetector, Ability.Grapple, Ability.Magic, Ability.SilverDestroy, Ability.ATeamMasterBuild, Ability.TimeTravel, Ability.MasterBuild, Ability.Diffindo], 
        abilitiesRescue: [Ability.Grapple], 
        abilitiesExtra: [],
        abilitiesStory: [Ability.Technology, Ability.FixIt, Ability.ChargeTransfer, Ability.Laser, Ability.PKEMeter, Ability.Intelligence, Ability.TowBar],
        access: Ability.Ghostbusters2016Story, year: 2, franchise: Franchise.Ghostbusters2016,
        desc: 'In the first level of the Ghostbusters 2016 Story Pack you play already with three characters Abby Yates, Jillian Holtzmann, Erin Gilbert. Patty Tolan will follow later. Notable is that you need the alternate character abilities - Fix-It and Technology.',
        image: 'ghostbusters-chapter1-thumbnail',
        storyVideo: 'TAunMvBvtuc',
        lastUpdate: 'Nov 13, 2016'
    },

    <LevelData>{ url: 'ghostbusters-2', name: 'Ghostbusting!', chapter: 2, story: 'Ghostbusters 2016',
        abilitiesMinikits: [Ability.Magic, Ability.Flying, Ability.Target, Ability.ATeamMasterBuild, Ability.BMODocks, Ability.SilverDestroy, Ability.RelicDetector, Ability.XRay, Ability.RedDemonObjects, Ability.Grapple], 
        abilitiesRescue: [Ability.PoleVault, Ability.Acrobat], 
        abilitiesExtra: [Ability.FuseBox],
        abilitiesStory: [Ability.TowBar, Ability.Laser, Ability.PKEMeter, Ability.SuperStrengthHandles, Ability.FixIt, Ability.Technology, Ability.ChargeTransfer, Ability.Accelerator, Ability.SuspendGhost, Ability.TrapGhosts],
        access: Ability.Ghostbusters2016Story, year: 2, franchise: Franchise.Ghostbusters2016,
        lastUpdate: 'Nov 13, 2016'
    },

    <LevelData>{ url: 'ghostbusters-3', name: 'The Mercado Building', chapter: 3, story: 'Ghostbusters 2016',
        abilitiesMinikits: [Ability.SuperStrengthHandles, Ability.SonarSmash, Ability.BMODocks, Ability.Drone, Ability.RelicDetector, Ability.Technology, Ability.PortalGun, Ability.Diffindo, Ability.WeightSwitch, Ability.SentryTurret, Ability.Gyrosphere, Ability.Boomerang], 
        abilitiesRescue: [Ability.PortalGun], 
        abilitiesExtra: [],
        abilitiesStory: [Ability.Laser, Ability.TowBar, Ability.SuspendGhost, Ability.TrapGhosts, Ability.PKEMeter, Ability.FixIt, Ability.Intelligence, Ability.Accelerator, Ability.ChargeTransfer],
        access: Ability.Ghostbusters2016Story, year: 2, franchise: Franchise.Ghostbusters2016,
        lastUpdate: 'Nov 13, 2016'
    },

    <LevelData>{ url: 'ghostbusters-4', name: 'Breaking the Barrier', chapter: 4, story: 'Ghostbusters 2016',
        abilitiesMinikits: [Ability.SlurpAccess, Ability.Magic, Ability.Parseltongue, Ability.Hacking, Ability.Flying, Ability.CargoHook, Ability.RelicDetector, Ability.Chi, Ability.RainbowLego, Ability.MiniAccess], 
        abilitiesRescue: [Ability.SonarSmash, Ability.MasterBuild, Ability.SilverDestroy], 
        abilitiesExtra: [],
        abilitiesStory: [Ability.SuspendGhost, Ability.TrapGhosts, Ability.SuperStrength, Ability.Intelligence, Ability.SuperStrengthHandles, Ability.ChargeTransfer, Ability.FixIt, Ability.PKEMeter, Ability.Laser, Ability.Accelerator],
        access: Ability.Ghostbusters2016Story, year: 2, franchise: Franchise.Ghostbusters2016,
        lastUpdate: 'Nov 13, 2016'
    },

    <LevelData>{ url: 'ghostbusters-5', name: 'The Battle for Times Square', chapter: 5, story: 'Ghostbusters 2016',
        abilitiesMinikits: [Ability.Boomerang, Ability.Flying, Ability.FlightDock, Ability.SilverDestroy, Ability.RelicDetector, Ability.Drilling, Ability.VineCutting, Ability.SwordSwitch, Ability.WaterSpray, Ability.Magic], 
        abilitiesRescue: [Ability.FuseBox, Ability.VineCutting], 
        abilitiesExtra: [],
        abilitiesStory: [Ability.SuperStrength, Ability.SuperStrengthHandles, Ability.ChargeTransfer, Ability.Accelerator, Ability.SuspendGhost, Ability.TrapGhosts, Ability.PKEMeter, Ability.Intelligence, Ability.FixIt, Ability.Technology, Ability.Laser, Ability.Grapple],
        /* secret area: VineCutting */
        access: Ability.Ghostbusters2016Story, year: 2, franchise: Franchise.Ghostbusters2016,
        lastUpdate: 'Nov 13, 2016'
    },

    <LevelData>{ url: 'ghostbusters-6', name: 'The Final Showdown', chapter: 6, story: 'Ghostbusters 2016',
        abilitiesMinikits: [Ability.Atlantis, Ability.CargoHook, Ability.Gyrosphere, Ability.Diffindo, Ability.Flying, Ability.FuseBox], 
        abilitiesRescue: [], 
        abilitiesExtra: [],
        abilitiesStory: [Ability.SilverDestroy, Ability.SuperStrengthHandles, Ability.Laser, Ability.Grapple, Ability.FixIt, Ability.RopeSwings, Ability.SuspendGhost, Ability.TrapGhosts, Ability.ChargeTransfer, Ability.TowBar, Ability.TargetPlusSilver, Ability.PKEMeter, Ability.Technology],
        access: Ability.Ghostbusters2016Story, year: 2, franchise: Franchise.Ghostbusters2016,
        lastUpdate: 'Nov 13, 2016'
    },

    <LevelData>{ url: 'back-to-the-future-level', name: 'Back to the Future', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.Laser, Ability.Drone, Ability.Grapple, Ability.Boomerang, Ability.Magic, Ability.Digging, Ability.Drilling, Ability.SilverDestroy, Ability.Atlantis], abilitiesRescue: [Ability.Magic], abilitiesExtra: [Ability.Arcade, Ability.FixIt], 
        abilitiesStory: [Ability.SonarSmash, Ability.Accelerator, Ability.TimeTravel, Ability.HoverOrFlying, Ability.BackToTheFutureLevel], 
        access: Ability.BackToTheFutureLevel, walkthrough: 'https://www.youtube.com/watch?v=6X6F7J2aZxo', year: 1, franchise: Franchise.BackToTheFuture,
        desc: undefined,
        image: 'back-to-the-future-level',
        lastUpdate: 'Nov 13, 2016'
    }, /* Marty McFly, car */

    <LevelData>{ url: 'portal-2-level', name: 'Aperture Science', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.LaserDeflector, Ability.XRay, Ability.Flying, Ability.Target, Ability.Grapple, Ability.Boomerang, Ability.Illumination, Ability.RelicDetector, Ability.Laser, Ability.VineCutting], abilitiesRescue: [Ability.Chi], abilitiesExtra: [], abilitiesStory: [Ability.PortalGun, Ability.WeightSwitch, Ability.SentryTurret], 
        access: Ability.Level_Portal2, walkthrough: '', year: 1, franchise: Franchise.Portal2,
        lastUpdate: 'Nov 13, 2016'
    }, /* chell, turret */

    <LevelData>{ url: 'doctor-who-level', name: 'The Dalek Extermination of Earth', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.VineCutting, Ability.RelicDetector, Ability.Grapple, Ability.Magic, Ability.Digging, Ability.Laser, Ability.MasterBuild, Ability.Boomerang, Ability.Stealth, Ability.Electricity], abilitiesRescue: [Ability.WaterSpray, Ability.Magic], abilitiesExtra: [], abilitiesStory: [Ability.FixIt, Ability.Tardis, Ability.SilverDestroy, Ability.Technology, Ability.Stealth, Ability.Flying], 
        access: Ability.Level_DoctorWho, walkthrough: '', year: 1, franchise: Franchise.DoctorWho,
        lastUpdate: 'Nov 13, 2016'
    }, /* water spray or ice */

    <LevelData>{ url: 'the-simpsons-level', name: 'The Mysterious Voyage of Homer', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.Tracking, Ability.RelicDetector, Ability.Laser, Ability.Hacking, Ability.Tardis, Ability.Technology, Ability.PortalGun /* or fly */, Ability.WeightSwitch], abilitiesRescue: [Ability.Atlantis], abilitiesExtra: [Ability.Gyrosphere, Ability.Chi, Ability.PoleVault, Ability.Acrobat], 
        abilitiesStory: [Ability.SonarSmash, Ability.SimpsonsLevel, Ability.TowBar, Ability.SuperStrength, Ability.SilverDestroy, Ability.Magic, Ability.Accelerator /* vehicle */, Ability.TauntEnemies], 
        access: Ability.SimpsonsLevel, walkthrough: '', year: 1, franchise: Franchise.TheSimpsons,
        image: 'simpsons-level',
        lastUpdate: 'Nov 13, 2016'
    },
        /* extra gyrosphete, target, chima, poul valt, acrobat */
        /* atlantis is for rescue? */

    <LevelData>{ url: 'ghostbusters-level', name: 'Ghostbusters!', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.RelicDetector, Ability.Drone, Ability.Magic, Ability.XRay, Ability.Technology, Ability.SuperStrength, Ability.LaserDeflector, Ability.Grapple, Ability.Drilling, Ability.CargoHook], abilitiesRescue: [Ability.RelicDetector, Ability.Drone], abilitiesExtra: [Ability.HazardCleaner], 
        abilitiesStory: [Ability.Laser, Ability.Accelerator, Ability.SuspendGhost, Ability.TrapGhosts, Ability.GhostbustersLevel], 
        access: Ability.GhostbustersLevel, walkthrough: '', year: 1, franchise: Franchise.Ghostbusters,
        desc: 'You have to play the level in order to get the build instructions for the Ecto-1 and the Ghost Trap.',
        image: 'ghostbusters-level',
        lastUpdate: 'Nov 13, 2016'
    },

    <LevelData>{ url: 'midway-arcade-level', name: 'Retro Wreckage', chapter: 0, story: 'Year 1 Level Packs',
        abilitiesMinikits: [Ability.Grapple, Ability.XRay, Ability.SonarSmash, Ability.Drone, Ability.FlightDock, Ability.Magic, Ability.RelicDetector, Ability.FixIt, Ability.CargoHook], abilitiesRescue: [Ability.Digging], abilitiesExtra: [Ability.TowBar, Ability], 
        abilitiesStory: [Ability.Invulnerability, Ability.MidwayArcadeLevel, Ability.Accelerator, Ability.Arcade, Ability.Invisibility, Ability.Laser, Ability.Speed, Ability.SuperStrength, Ability.Stealth], 
        access: Ability.MidwayArcadeLevel, walkthrough: '', year: 1, franchise: Franchise.MidwayArcade,
        desc: 'You have to play the level in order to get the build instructions for the Arcade Machine and the Spy Hunter.',
        image: 'midway-arcade-level',
        lastUpdate: 'Nov 13, 2016'
    },
        
    <LevelData>{ url: 'main-story-1-follow-the-lego-brick-road', name: 'Follow The Lego Brick Road – Wizard Of Oz', chapter: 1, story: 'Main Story',
        abilitiesMinikits: [Ability.SilverDestroy, Ability.Hacking, Ability.HazardCleaner, Ability.Grapple, Ability.RelicDetector, Ability.SuperStrength, Ability.Tracking, 
        Ability.TrapGhosts, Ability.SuspendGhost, Ability.Magic, Ability.Laser, Ability.TowBar], abilitiesRescue: [Ability.TrapGhosts, Ability.SuspendGhost, Ability.Laser], 
        abilitiesExtra: [Ability.Arcade], abilitiesStory: [Ability.Grapple, Ability.Magic, Ability.RelicDetector, Ability.Accelerator, Ability.Boomerang,
        Ability.Acrobat],
        // ranged attack (magic or boomerang)? // driving vehicle or flying
        access: -1, walkthrough: 'http://www.ign.com/wikis/lego-dimensions/Follow_the_LEGO_Brick_Road', year: 1, franchise: Franchise.Dimensions,
        lastUpdate: 'Nov 13, 2016'
    },

    <LevelData>{ url: 'main-story-2-meltdown-at-sector-7g', name: 'Meltdown at Sector 7-G – The Simpsons', chapter: 2, story: 'Main Story',
        abilitiesMinikits: [Ability.Digging, /* Ability.Shoot */ Ability.SilverDestroy, Ability.Drilling, Ability.Spinjitzu, Ability.Illumination, Ability.WeightSwitch,
        Ability.Stealth, Ability.Hacking, Ability.Tardis, Ability.Technology, Ability.Laser], 
        abilitiesRescue: [Ability.RainbowLego], 
        abilitiesExtra: [Ability.Flying, Ability.XRay, Ability.HazardCleaner, Ability.Electricity], 
        abilitiesStory: [Ability.RelicDetector, Ability.Grapple, Ability.Magic, Ability.Accelerator, Ability.MasterBuild, Ability.Acrobat], 
        /* secret area: Hacking, Tardis */
        access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions,
        lastUpdate: 'Dec 4, 2016'
    },

    <LevelData>{ url: 'main-story-3-elements-of-surprise', name: 'Elements of Surprise', chapter: 3, story: 'Main Story',
        abilitiesMinikits: [Ability.TowBar, Ability.PortalGun, Ability.Flying, Ability.Hacking, Ability.SuperStrength, Ability.Spinjitzu, Ability.Stealth,
        Ability.FixIt, Ability.RainbowLego, Ability.Tracking, Ability.Atlantis], 
        abilitiesRescue: [Ability.Drilling, Ability.FixIt], 
        abilitiesExtra: [], 
        abilitiesStory: [Ability.Magic, Ability.Acrobat, Ability.RelicDetector, Ability.Boomerang, Ability.MasterBuild, Ability.Accelerator, Ability.Grapple], 
        /* secret area: Spinjitzu */
        access: -1, walkthrough: '', year: 1, franchise: Franchise.Dimensions,
        lastUpdate: 'Dec 4, 2016'
    },

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
