import { AbilityData, AbilityType, BuilderTag } from './data-types';

export enum Ability {
    Atlantis = 0,
    Chi,
    SuperStrength,
    Digging,
    Dive,
    Drilling,
    Electricity,
    FixIt,
    FlightDock,
    Gyrosphere,
    Hacking,
    HazardCleaner,
    Laser,
    MiniAccess,
    PoleVault,
    PortalGun,
    RainbowLego,
    SilverDestroy,
    SonarSmash,
    TrapGhosts,
    Spinjitzu,
    Target = 22,
    Technology,
    TowBar = 25,
    Tracking,
    VineCutting,
    WaterSpray,
    WeightSwitch,
    XRay,
    Illumination,
    RelicDetector,
    BigTransformation,
    HazardProtection,
    Boomerang,
    Grapple,
    Stealth,
    Acrobat,
    LaserDeflector,
    Drone,
    MindControl,
    MasterBuild,
    Flying,
    Invulnerability,
    Speed,
    Magic,
    MagicShield,
    Ice,
    Gliding,
    Accelerator,
    CargoHook,
    Growth,
    TimeTravel,
    Tardis,
    Arcade,
    SuspendGhost,

    DivePlusDigging,
    DivePlusBoomerang,
    DivePlusChi,
    DivePlusDrone,
    DivePlusGhostImmunity,
    DivePlusGrapple,
    DivePlusHacking,
    DivePlusHazardCleaner,
    DivePlusLaser,
    DivePlusMini,
    DivePlusSilverDestroy,
    DivePlusSonarSmash,
    DivePlusSuperStrength,
    DivePlusTarget,
    DivePlusTechnology,
    DivePlusTracking,
    DivePlusXRay,
    FlightPlusLaser,

    Dodging,
    SwordSwitch,
    SentryTurret,
    WaterSprayOrIce,
    RedDemonObjects,
    Disguise,
    MagnoGloves,
    FlyingDrone,
    SlurpAccess,
    Diffindo,
    Parseltongue,
    Invisibility,
    Intelligence,
    ChargeTransfer,

    Ghostbusters2016Story,
    Adventure_Ghostbusters2016,
    Adventure_JurassicWorld,
    Adventure_DC,
    Adventure_ATeam,
    Adventure_LegoMovie,
    Adventure_Simpsons,
    SimpsonsLevel,
    Story_Batman,
    Adventure_Batman,
    Level_Portal2,
    Adventure_Portal2,
    Adventure_Ninjago,
    Adventure_Chima,
    Adventure_DoctorWho,
    Level_DoctorWho,
    Adventure_BackToTheFuture,
    BackToTheFutureLevel,
    MissionImpossibleWorld,
    MissionImpossibleLevel,
    Adventure_AdventureTime,
    Level_AdventureTime,
    MidwayArcadeLevel,
    Adventure_Midway,
    Adventure_LordOfTheRing,
    Adventure_HarryPotter,
    Adventure_KnightRider,
    Level_KnightRider,
    GhostbustersLevel,
    Adventure_Ghostbusters,
    Adventure_ScoobyDoo,
    Adventure_Oz,
    RopeSwings,
    FuseBox,
    SuperStrengthHandles,
    ATeamMasterBuild,

    Jump,
    SuperJump,
    BMODocks,
    Guardian,
    Hover,
    SpecialAttack,
    SpecialWeapon,
    SailsOnWater,
    GoldDestroy,
    RefillHealth,
    TauntEnemies,
    TargetPlusSilver,
    MagicWalls,
    HoverOrFlying,

    FantasticsBeastsStory,
    FantasticsBeastsWorld,
    SonicLevel,
    SonicWorld,
    GremlinsWorld,
    ETWorld,
    KnightRiderWorld,
    BatmanMovieWorld,
    BatmanMovieStory,
    GooniesLevel,
    GooniesWorld,
    TeenTitansGoWorld,

    BatmanMasterBuild,
    PKEMeter

    /* end of year 1 */
}

export const abilities: AbilityData[] = [
    <AbilityData>{ id: 0, url: 'atlantis', name: 'Atlantis Pools', desc: 'speak to the fishes', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 1, url: 'chi-power', name: 'Chi Power', desc: 'use \'Chi Up\'', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: Ability.SuperStrength, url: 'super-strength', name: 'Super Strength', desc: 'destroy cracked Lego walls', type: AbilityType.Normal, tags: [], extradesc: 'Also known as \"cracked walls\" ability.' }, // aka cracked wall
    <AbilityData>{ id: 3, url: 'digging', name: 'Digging', desc: 'use dig spots', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 4, url: 'dive', name: 'Dive', desc: 'dive and swim underwater', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 5, url: 'drilling', name: 'Drilling', desc: 'drill at drill spots', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 6, url: 'electricity', name: 'Electricity', desc: 'power electric coils', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 7, url: 'fix-it', name: 'Fix-it', desc: 'fix blue glowing Lego objects', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 8, url: 'flight-dock', name: 'Flight Dock', desc: 'power jet switches', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 9, url: 'gyrosphere-switch', name: 'Gyropshere Switch', desc: 'use gyrosphere switches', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 10, url: 'hacking', name: 'Hacking', desc: 'hack terminals', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 11, url: 'hazard-cleaner', name: 'Hazard Cleaner', desc: 'clear toxic hazards', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 12, url: 'laser', name: 'Laser', desc: 'destroy gold Lego objects; melt Lego ice', type: AbilityType.Normal, tags: [], image: 'laser' },
    <AbilityData>{ id: 13, url: 'mini-access', name: 'Mini Access', desc: 'enter small hatches', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 14, url: 'pole-vault', name: 'Pole Vault', desc: 'create extra twirl poles', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 15, url: 'portal-gun', name: 'Portal Gun', desc: 'fire portals at white Lego panels to reach other areas', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 16, url: 'rainbow-lego', name: 'Rainbow Lego Objects', desc: 'smash rainbow Lego objects', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 17, url: 'silver-destroy', name: 'Silver Lego Blowup', desc: 'destroy silver Lego objects', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 18, url: 'sonar-smash', name: 'Sonar Smash', desc: 'destroy sonar glass', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 19, url: 'trap-ghosts', name: 'Trap Ghosts', desc: 'clear ghostly swarms', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 20, url: 'spinjitzu', name: 'Spinjitzu', desc: 'use Spinjitzu switches', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 22, url: 'target', name: 'Target', desc: 'use target switches', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 23, url: 'technology', name: 'Technology', desc: 'use technology panels', type: AbilityType.Normal, tags: [], image: 'technology' },
    <AbilityData>{ id: 25, url: 'tow-bar', name: 'Tow Bar', desc: 'pull down weak Lego walls', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 26, url: 'tracking', name: 'Tracking', desc: 'track trails', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 27, url: 'vine-cut', name: 'Vine Cut', desc: 'cut green vines', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 28, url: 'water-spray', name: 'Water Spray', desc: 'grow Lego plants', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 29, url: 'weight-switch', name: 'Weight Switch', desc: 'place on cube switches', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 30, url: 'x-ray-vision', name: 'X-Ray Vision', desc: 'see through green Lego walls', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 31, url: 'illumination', name: 'Illumination', desc: 'light up dark areas', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 32, url: 'relic-detector', name: 'Relic Detector', desc: 'unhide objects that are indicated by purple sparkles', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 33, url: 'big-transformation', name: 'Big Transformation', desc: 'become big and more powerful', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 34, url: 'hazard-protection', name: 'Hazard Protection', desc: 'enter toxic areas without damage', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 35, url: 'boomerang', name: 'Boomerang', desc: 'throw a boomerang at a switch', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 36, url: 'grapple', name: 'Grapple', desc: 'use an orange grab point to pull or climb', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 37, url: 'stealth', name: 'Stealth', desc: 'hide from security cameras', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 38, url: 'acrobat', name: 'Acrobat', desc: 'jump extra high, climb special walls and grab poles', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 39, url: 'laser-deflector', name: 'Laser Deflector', desc: 'deflect laser when standing on deflection points', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 40, url: 'drone', name: 'Drone', desc: 'spawn a small drone controlled by the user', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 41, url: 'mind-control', name: 'Mind Control', desc: 'take over characters with a question mark above their head', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 42, url: 'master-build', name: 'Master Build', desc: 'rebuild objects like in the Lego Movie', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 43, url: 'flying', name: 'Flying', desc: 'fly', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 44, url: 'invulnerability', name: 'Invulnerability', desc: 'take no damage', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 45, url: 'speed', name: 'Speed', desc: 'move faster', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 46, url: 'magic', name: 'Magic', desc: 'move objects with blue stars', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 47, url: 'magic-shield', name: 'Magic Shield', desc: 'prevent damage using a shield', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 48, url: 'ice', name: 'Freeze Breath', desc: 'freeze other characters and extinguish fire', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 49, url: 'gliding', name: 'Gliding', desc: 'fall down slower', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 50, url: 'accelerator-switch', name: 'Accelerator Switch', desc: 'use accelerator switches', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 51, url: 'cargo-hook', name: 'Cargo Hook', desc: 'grab cargo while flying and place it somewhere else', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 52, url: 'growth', name: 'Growth', desc: 'grow plants', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 53, url: 'time-travel-switch', name: 'Time Travel Switch', desc: 'use time travel switches', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 54, url: 'tardis-pad', name: 'Tardis Pad', desc: 'use the Tardis pads', type: AbilityType.Normal, tags: [], extradesc: 'OK, this was pretty obvious from the name, wasn\'t it?' },
    <AbilityData>{ id: 55, url: 'arcade-station', name: 'Arcade Station', desc: 'use the arcade station pads', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: 56, url: 'suspend-ghost', name: 'Suspend Ghost', desc: 'prepare ghosts for capturing', type: AbilityType.Normal, tags: [] },

    <AbilityData>{ id: 57, url: 'dive+digging', name: 'Dive + Digging', desc: 'use dig spots underwater', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 58, url: 'dive+boomerang', name: 'Dive + Boomerang', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 59, url: 'dive+chi', name: 'Dive + Chi', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 60, url: 'dive+drone-access', name: 'Dive + Drone Access', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 61, url: 'dive+ghost-immunity', name: 'Dive + Ghost Immunity', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 62, url: 'dive+grapple', name: 'Dive + Grapple', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 63, url: 'dive+hacking', name: 'Dive + Hacking', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 64, url: 'dive+hazard-cleaner', name: 'Dive + Hazard Cleaner', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 65, url: 'dive+laser', name: 'Dive + Laser', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 66, url: 'dive+mini-access', name: 'Dive + Mini Access', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 67, url: 'dive+silver-destroy', name: 'Dive + Silver Destroy', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 68, url: 'dive+sonar-smash', name: 'Dive + Sonar Smash', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 69, url: 'dive+super-strength', name: 'Dive + Super Strength', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 70, url: 'dive+target', name: 'Dive + Target', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 71, url: 'dive+technology', name: 'Dive + Technology', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 72, url: 'dive+tracking', name: 'Dive + Tracking', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 73, url: 'dive+x-ray-vision', name: 'Dive + X-Ray Vision', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: 74, url: 'flight+laser', name: 'Flight + Laser', desc: '', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: Ability.TargetPlusSilver, url: null, name: 'Target + Silver Destroy', desc: 'target and destroy silver objects', type: AbilityType.Combo, tags: [] },
    <AbilityData>{ id: Ability.HoverOrFlying, url: null, name: 'Hover or Fly', desc: 'cross short distances', type: AbilityType.Alternative, tags: [], unimportant: true },

    //<AbilityData>{ id: 75, url: 'dodging', name: 'Dodging', desc: 'dodge (not confirmed ability)', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    <AbilityData>{ id: Ability.SwordSwitch, url: 'sword-switch', name: 'Sword Switch', desc: 'use sword switches', type: AbilityType.Normal, tags: [BuilderTag.Year2], image: 'sword-switch' },
    <AbilityData>{ id: Ability.SentryTurret, url: 'sentry-turret', name: 'Sentry Turret', desc: 'automatically shoot', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: Ability.WaterSprayOrIce, url: null, name: 'Water Spray or Ice', desc: '', type: AbilityType.Alternative, tags: [] },
    <AbilityData>{ id: Ability.RedDemonObjects, url: 'cursed-red-objects', name: 'Cursed Red Objects', desc: 'destroy cursed red demon objects', type: AbilityType.Normal, tags: [BuilderTag.Year2], image: 'cursed-red-objects' },
    <AbilityData>{ id: Ability.Disguise, url: 'scan-disguise', name: 'Scan Disguise', desc: 'use a disguise in at the security scan booth', type: AbilityType.Normal, tags: [BuilderTag.Year2], image: 'scan-disguise' },
    <AbilityData>{ id: Ability.MagnoGloves, url: 'magno-gloves', name: 'Magno Gloves', desc: 'climb walls with magnetic gloves', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    <AbilityData>{ id: Ability.SlurpAccess, url: 'slurp-access', name: 'Vent Access', desc: 'go through vents', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    <AbilityData>{ id: Ability.Diffindo, url: 'diffindo', name: 'Diffindo', desc: 'use the Diffindo spell', type: AbilityType.Normal, tags: [BuilderTag.Year2], image: 'diffindo' },
    <AbilityData>{ id: Ability.Parseltongue, url: 'parseltongue', name: 'Parseltongue', desc: 'speak with snakes in Parseltongue', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    <AbilityData>{ id: Ability.Intelligence, url: 'intelligence', name: 'Intelligence', desc: 'play the memory game', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    <AbilityData>{ id: Ability.ChargeTransfer, url: 'charge-transfer', name: 'Charge Transfer', desc: 'use a Charge Transfer Panel', type: AbilityType.Normal, tags: [BuilderTag.Year2], image: 'charge-transfer', extradesc: 'This ability was introduced with the Ghostbusters Story Pack (year 2 wave 6).' },
    <AbilityData>{ id: Ability.RopeSwings, url: 'rope-swings', name: 'Rope Swings', desc: 'use Orange Hooks to swing', type: AbilityType.Normal, tags: [BuilderTag.Year2], image: 'rope-swings' },
    <AbilityData>{ id: Ability.FuseBox, url: 'fuse-box', name: 'Fuse Box', desc: 'rewire a fuse box', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    <AbilityData>{ id: Ability.FlyingDrone, url: 'flying-drone', name: 'Flying Drone', desc: 'use a flying drone', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    <AbilityData>{ id: Ability.SuperStrengthHandles, url: 'super-strength-handles', name: 'Super Strength Handles', desc: 'pull super strength handles', type: AbilityType.Normal, tags: [BuilderTag.Year2], extradesc: 'This ability was introduced with year 2. Many year 1 characters with super strength ability also got this ability. The vehicles with super strength handles are to be confirmed.' },
    <AbilityData>{ id: Ability.ATeamMasterBuild, url: 'a-team-master-build', name: 'A-Team Master Build', desc: 'rebuild brown Lego objects like in the Lego Movie', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    <AbilityData>{ id: Ability.Jump, url: null, name: 'Jump', desc: 'jump', type: AbilityType.Normal, tags: [BuilderTag.Year2], unimportant: true },
    <AbilityData>{ id: Ability.SuperJump, url: null, name: 'Super Jump', desc: 'jump (unconfirmed)', type: AbilityType.Normal, tags: [BuilderTag.Year2], unimportant: true },
    <AbilityData>{ id: Ability.BMODocks, url: 'bmo-docks', name: 'BMO Docks', desc: 'use BMO docks', type: AbilityType.Normal, tags: [BuilderTag.Year2], image: 'bmo-docks' },
    <AbilityData>{ id: Ability.Guardian, url: 'guardian', name: 'Guardian', desc: 'do something (unconfirmed)', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    <AbilityData>{ id: Ability.Hover, url: 'hover', name: 'Hover', desc: 'fly over short distance', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: Ability.Invisibility, url: 'invisibility', name: 'Invisibility', desc: 'hide from enemies', type: AbilityType.Normal, tags: [], unimportant: true },
    <AbilityData>{ id: Ability.SpecialAttack, url: 'special-attack', name: 'Special Attack', desc: '', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: Ability.SpecialWeapon, url: 'special-weapon', name: 'Special Weapon', desc: '', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: Ability.SailsOnWater, url: 'sails-on-water', name: 'Sails on Water', desc: 'sails on water', type: AbilityType.Normal, tags: [], unimportant: true },
    <AbilityData>{ id: Ability.RefillHealth, url: 'refill-health', name: 'Refill Health', desc: 'automatically refill health of nearby characters', type: AbilityType.Normal, tags: [], unimportant: true },
    <AbilityData>{ id: Ability.TauntEnemies, url: 'taunt-enemies', name: 'Taunt Enemies', desc: 'distract enemies', type: AbilityType.Normal, tags: [] },
    <AbilityData>{ id: Ability.MagicWalls, url: 'magic-walls', name: 'Magic Walls (wave 7.5)', desc: 'teleport through purple magic walls', type: AbilityType.Normal, tags: [BuilderTag.Year2], extradesc: 'So far it is unclear if it will be a unique skill or available to more than one character.', image: 'magic-walls' },
    <AbilityData>{ id: Ability.BatmanMasterBuild, url: 'batman-master-build', name: 'Batman Master Build', desc: 'rebuild Batman? Lego objects like in the Lego Movie', type: AbilityType.Normal, tags: [BuilderTag.Year2] },
    <AbilityData>{ id: Ability.PKEMeter, url: 'pke-meter', name: 'P.K.E. Meter', desc: 'detect hidden Ghosts', type: AbilityType.Normal, tags: [BuilderTag.Year2] },

    <AbilityData>{ id: Ability.Ghostbusters2016Story, url: null, name: 'Ghostbusters 2016 Story', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_Ghostbusters2016, url: null, name: 'Ghostbusters 2016 World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_JurassicWorld, url: null, name: 'Jurassic World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_DC, url: null, name: 'DC Comics World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_ATeam, url: null, name: 'A-Team Adventure World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_LegoMovie, url: null, name: 'Lego Movie World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_Simpsons, url: null, name: 'The Simpsons World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.SimpsonsLevel, url: null, name: 'The Simpsons Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Story_Batman, url: null, name: 'Lego Batman Story', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_Batman, url: null, name: 'Lego Batman World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Level_Portal2, url: null, name: 'Portal 2 Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_Portal2, url: null, name: 'Portal 2 World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_Ninjago, url: null, name: 'Ninjago World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_Chima, url: null, name: 'Chima World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_DoctorWho, url: null, name: 'Doctor Who World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Level_DoctorWho, url: null, name: 'Doctor Who Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_BackToTheFuture, url: null, name: 'Back to the Future World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.BackToTheFutureLevel, url: null, name: 'Back to the Future Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.MissionImpossibleWorld, url: null, name: 'Mission: Impossible World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.MissionImpossibleLevel, url: null, name: 'Mission: Impossible Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_AdventureTime, url: null, name: 'Adventure Time World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Level_AdventureTime, url: null, name: 'Adventure Time Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.MidwayArcadeLevel, url: null, name: 'Midway Arcade Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_Midway, url: null, name: 'Midway Arcade World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_LordOfTheRing, url: null, name: 'Lord of the Rings World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_HarryPotter, url: null, name: 'Harry Potter World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_KnightRider, url: null, name: 'Knight Rider World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Level_KnightRider, url: null, name: 'Knight Rider Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.GhostbustersLevel, url: null, name: 'Ghostbusters Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_Ghostbusters, url: null, name: 'Ghostbusters World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_ScoobyDoo, url: null, name: 'Scooby Doo World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.Adventure_Oz, url: null, name: 'The Wizard of Oz World', desc: '', type: AbilityType.LocationAccess, tags: [] },

    <AbilityData>{ id: Ability.FantasticsBeastsStory, url: null, name: 'Fantastic Beasts Story', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.FantasticsBeastsWorld, url: null, name: 'Fantastic Beasts World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.SonicLevel, url: null, name: 'Sonic Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.SonicWorld, url: null, name: 'Sonic World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.GremlinsWorld, url: null, name: 'Gremlins World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.ETWorld, url: null, name: 'E.T. World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.KnightRiderWorld, url: null, name: 'Knight Rider World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.BatmanMovieWorld, url: null, name: 'Batman Movie World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.BatmanMovieStory, url: null, name: 'Batman Movie Story', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.GooniesLevel, url: null, name: 'The Goonies Level', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.GooniesWorld, url: null, name: 'The Goonies World', desc: '', type: AbilityType.LocationAccess, tags: [] },
    <AbilityData>{ id: Ability.TeenTitansGoWorld, url: null, name: 'Teen Titans Go World', desc: '', type: AbilityType.LocationAccess, tags: [] },
      

/*
    { id: , url: '', name: '', desc: '' },
*/
];
