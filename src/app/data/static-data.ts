import { PackType } from './data';

export class PackData {
    id: number;
    name: string;
    type: PackType;
    wave: number;
    year: number;
    image: string;
    minifigs: number[];
    builds: number[];
    desc: string;
    amazon: string;
    video: string;
}

export const packs: PackData[] = [
    <PackData>{ id: 71205, wave: 1, year: 1, minifigs: [], builds: [], name: 'Jurassic World™',
        type: PackType.TeamPack, image: '03_LD_PO_TP_JurassicWorld', desc: '', amazon: 'http://amzn.to/2dMTBJn' },
    <PackData>{ id: 71170, wave: 1, year: 1, minifigs: [], builds: [], name: 'Lego Dimensions',
        type: PackType.StarterSet, image: 'wave-1-starterpack', desc: '', amazon: null },
    <PackData>{ id: 71201, wave: 1, year: 1, minifigs: [], builds: [], name: 'Back to the Future™',
        type: PackType.LevelPack, image: '03_LD_PO_LP_BTTF_Marty', desc: '', amazon: 'http://amzn.to/2dli7hN' },
    <PackData>{ id: 71202, wave: 1, year: 1, minifigs: [], builds: [], name: 'The Simpsons™',
        type: PackType.LevelPack, image: '03_LD_PO_LP_Simpsons_Homer', desc: '', amazon: 'http://amzn.to/2esRN7f' },
    <PackData>{ id: 71235, wave: 4, year: 1, minifigs: [], builds: [], name: 'Midway Arcade™',
        type: PackType.LevelPack, image: '03_LD_PO_FP_GB_INTL_GamerKid', desc: '', amazon: 'http://amzn.to/2eac0fc' },
    <PackData>{ id: 71228, wave: 3, year: 1, minifigs: [], builds: [], name: 'Ghostbusters™',
        type: PackType.LevelPack, image: '03_LD_PO_FP_GB_PeterVenkman', desc: '', amazon: 'http://amzn.to/2dMSvgH' },
    <PackData>{ id: 71204, wave: 2, year: 1, minifigs: [], builds: [], name: 'Doctor Who', type: PackType.LevelPack, image: '03_LD_PO_LP_DocWho', desc: '', amazon: 'http://amzn.to/2esRmKi' },
    <PackData>{ id: 71203, wave: 1, year: 1, minifigs: [], builds: [], name: 'Portal® 2', type: PackType.LevelPack, image: '03_LD_PO_LP_Portal', desc: '', amazon: 'http://amzn.to/2eaav0o' },
    <PackData>{ id: 71229, wave: 3, year: 1, minifigs: [], builds: [], name: 'DC Comics™', type: PackType.TeamPack, image: '03_LD_PO_FP_DC_Joker_Harley', desc: '', amazon: null },
    <PackData>{ id: 71207, wave: 2, year: 1, minifigs: [], builds: [], name: 'Lego® Ninjago™',
        type: PackType.TeamPack, image: '03_LD_PO_TP_Ninjago_Kai_Cole', desc: '', amazon: null },
    <PackData>{ id: 71206, wave: 1, year: 1, minifigs: [], builds: [], name: 'Scooby-Doo!™', type: PackType.TeamPack, image: '03_LD_PO_TP_ScoobyDoo', desc: '', amazon: 'http://amzn.to/2esUYM0' },
    <PackData>{ id: 71241, wave: 5, year: 1, minifigs: [], builds: [], name: 'Slimer', type: PackType.FunPack, image: '03_LD_PO_FP_GB_Slimer', desc: '', amazon: 'http://amzn.to/2egQskB' },
    <PackData>{ id: 71240, wave: 5, year: 1, minifigs: [], builds: [], name: 'Bane', type: PackType.FunPack, image: '03_LD_PO_FP_DC_Bane', desc: '', amazon: null },
    <PackData>{ id: 71239, wave: 5, year: 1, minifigs: [], builds: [], name: 'Lloyd', type: PackType.FunPack, image: '03_LD_PO_FP_Ninjago_Lloyd', desc: '', amazon: null },
    <PackData>{ id: 71237, wave: 4, year: 1, minifigs: [], builds: [], name: 'Aquaman', type: PackType.FunPack, image: '03_LD_PO_FP_DC_Aquaman', desc: '', amazon: 'http://amzn.to/2egPu86' },
    <PackData>{ id: 71236, wave: 4, year: 1, minifigs: [], builds: [], name: 'Superman', type: PackType.FunPack, image: '03_LD_PO_FP_DC_Superman', desc: '', amazon: null },
    <PackData>{ id: 71233, wave: 4, year: 1, minifigs: [], builds: [], name: 'Stay Puft', type: PackType.FunPack, image: '03_LD_PO_FP_GB_StayPuft', desc: '', amazon: null },
    <PackData>{ id: 71238, wave: 3, year: 1, minifigs: [], builds: [], name: 'Cyberman', type: PackType.FunPack, image: '03_LD_PO_FP_DrWho_Cyberman', desc: '', amazon: 'http://amzn.to/2d86T1T' },
    <PackData>{ id: 71234, wave: 3, year: 1, minifigs: [], builds: [], name: 'Sensei Wu', type: PackType.FunPack, image: '03_LD_PO_FP_Ninjago_SenseiWu', desc: '', amazon: 'http://amzn.to/2dMUguA' },
    <PackData>{ id: 71230, wave: 3, year: 1, minifigs: [], builds: [], name: 'Doc Brown', type: PackType.FunPack, image: '03_LD_PO_FP_BTTF_DocBrown', desc: '', amazon: null },
    <PackData>{ id: 71231, wave: 2, year: 1, minifigs: [], builds: [], name: 'Unikitty', type: PackType.FunPack, image: '03_LD_PO_FP_Unikitty', desc: '', amazon: null },
    <PackData>{ id: 71209, wave: 1, year: 1, minifigs: [], builds: [], name: 'Wonder Woman', type: PackType.FunPack, image: '03_LD_PO_FP_DC_WonderWoman', desc: '', amazon: null },
    <PackData>{ id: 71210, wave: 1, year: 1, minifigs: [], builds: [], name: 'Cyborg', type: PackType.FunPack, image: '03_LD_PO_FP_Cyborg', desc: '', amazon: null },
    <PackData>{ id: 71212, wave: 1, year: 1, minifigs: [], builds: [], name: 'Emmet', type: PackType.FunPack, image: '03_LD_PO_FP_Emmet', desc: '', amazon: null },
    <PackData>{ id: 71213, wave: 1, year: 1, minifigs: [], builds: [], name: 'Bad Cop', type: PackType.FunPack, image: '03_LD_PO_FP_Badcop', desc: '', amazon: null },
    <PackData>{ id: 71214, wave: 1, year: 1, minifigs: [], builds: [], name: 'Benny', type: PackType.FunPack, image: '03_LD_PO_FP_Benny', desc: '', amazon: null },
    <PackData>{ id: 71215, wave: 1, year: 1, minifigs: [], builds: [], name: 'Jay', type: PackType.FunPack, image: '03_LD_PO_FP_Ninjago_Jay', desc: '', amazon: null },
    <PackData>{ id: 71216, wave: 1, year: 1, minifigs: [], builds: [], name: 'Nya', type: PackType.FunPack, image: '03_LD_PO_FP_Ninjago_Nya', desc: '', amazon: null },
    <PackData>{ id: 71217, wave: 1, year: 1, minifigs: [], builds: [], name: 'Zane', type: PackType.FunPack, image: '03_LD_PO_FP_Ninjago_Zane', desc: '', amazon: null },
    <PackData>{ id: 71218, wave: 1, year: 1, minifigs: [], builds: [], name: 'Gollum', type: PackType.FunPack, image: '03_LD_PO_FP_LOTR_Gollum', desc: '', amazon: null },
    <PackData>{ id: 71219, wave: 1, year: 1, minifigs: [], builds: [], name: 'Legolas', type: PackType.FunPack, image: '03_LD_PO_FP_LOTR_Legolas', desc: '', amazon: null },
    <PackData>{ id: 71220, wave: 1, year: 1, minifigs: [], builds: [], name: 'Gimli', type: PackType.FunPack, image: '03_LD_PO_FP_LOTR_Gimli', desc: '', amazon: null },
    <PackData>{ id: 71221, wave: 1, year: 1, minifigs: [], builds: [], name: 'Wicked Witch', type: PackType.FunPack, image: '03_LD_PO_FP_WickedWitch', desc: '', amazon: 'http://amzn.to/2dLBJuX' },
    <PackData>{ id: 71222, wave: 1, year: 1, minifigs: [], builds: [], name: 'Laval', type: PackType.FunPack, image: '03_LD_PO_FP_Chima_Laval', desc: '', amazon: null },
    <PackData>{ id: 71223, wave: 1, year: 1, minifigs: [], builds: [], name: 'Cragger', type: PackType.FunPack, image: '03_LD_PO_FP_Chima_Cragger', desc: '', amazon: 'http://amzn.to/2eadDJM' },
    <PackData>{ id: 71232, wave: 1, year: 1, minifigs: [], builds: [], name: 'Eris', type: PackType.FunPack, image: '03_LD_PO_FP_Chima_Eris', desc: '', amazon: null },
    <PackData>{ id: 71211, wave: 2, year: 1, minifigs: [], builds: [], name: 'Bart Simpson', type: PackType.FunPack, image: '03_LD_PO_FP_Simpsons_Bart', desc: '', amazon: null },
    <PackData>{ id: 71227, wave: 2, year: 1, minifigs: [], builds: [], name: 'Krusty', type: PackType.FunPack, image: '03_LD_PO_FP_Simpsons_Krusty', desc: '', amazon: null },
    <PackData>{ id: 71245, wave: 6, year: 2, minifigs: [], builds: [], name: 'Adventure Time', type: PackType.LevelPack, image: 'wave-6-levelpack_adventure-time-finn', desc: '', amazon: 'http://amzn.to/2dcTTV2' },
    <PackData>{ id: 71248, wave: 6, year: 2, minifigs: [], builds: [], name: 'Mission: Impossible', type: PackType.LevelPack, image: 'wave-6-levelpack_mission-impossible', desc: '', amazon: 'http://amzn.to/2d7wLuQ' },
    <PackData>{ id: 71242, wave: 6, year: 2, minifigs: [], builds: [], name: 'Ghostbusters™', type: PackType.StoryPack, image: 'wave-6-storypack_ghostbusters', desc: '', amazon: 'http://amzn.to/2cOPkVi' },
    <PackData>{ id: 71246, wave: 6, year: 2, minifigs: [], builds: [], name: 'Adventure Time', type: PackType.TeamPack, image: 'wave-6-teampack_jake-lumpy-space-princess', desc: '', amazon: 'http://amzn.to/2dkEzpN' },
    <PackData>{ id: 71247, wave: 6, year: 2, minifigs: [], builds: [], name: 'Harry Potter', type: PackType.TeamPack, image: 'wave-6-teampack_harry-potter-lord-voldemort', desc: '', amazon: 'http://amzn.to/2dcTDFf' },
    <PackData>{ id: 71251, wave: 6, year: 2, minifigs: [], builds: [], name: 'the A-Team', type: PackType.FunPack, image: 'wave-6-funpack_ba-baracus', desc: '', amazon: 'http://amzn.to/2dkG6vT' },
    <PackData>{ id: 71253, wave: 7, year: 2, minifigs: [], builds: [], name: 'Fantastic Beasts and Where to Find Them', type: PackType.StoryPack, image: 'wave-7-fantastic-beasts-story-pack', desc: '', amazon: 'http://amzn.to/2d06z0p' },
    <PackData>{ id: 71257, wave: 7, year: 2, minifigs: [], builds: [], name: 'Tina Goldstein', type: PackType.FunPack, image: 'wave-7-tina-goldstein-fun-pack', desc: '', amazon: 'http://amzn.to/2cwPeyU' },
    <PackData>{ id: 71244, wave: 7, year: 2, minifigs: [], builds: [], name: 'Sonic the Hedgehog', type: PackType.LevelPack, image: 'wave-7-sonic-level-pack', desc: '', amazon: 'http://amzn.to/2e6vdm2', video: 'EgqMlOMvQNY' },
    <PackData>{ id: 71256, wave: 7, year: 2, minifigs: [], builds: [], name: 'Gremlins', type: PackType.TeamPack, image: 'wave-7-gremlins-team-pack', desc: '', amazon: 'http://amzn.to/2dkFPJu', video: 'F_bjch-jtGw' },
    <PackData>{ id: 71258, wave: 7, year: 2, minifigs: [], builds: [], name: 'E.T. The Extra-Terrestrial', type: PackType.FunPack, image: 'wave-7-et-fun-pack', desc: '', amazon: 'http://amzn.to/2dkFKFs' },
    <PackData>{ id: 71285, wave: 7, year: 2, minifigs: [], builds: [], name: 'Marceline', type: PackType.FunPack, image: 'wave-7-marceline-fun-pack', desc: '', amazon: null },
    <PackData>{ id: 71264, wave: 7.5, year: 2, minifigs: [], builds: [], name: 'LEGO Batman Movie', type: PackType.StoryPack, image: 'wave-7.5-batman-story-pack', desc: '', amazon: 'http://amzn.to/2d7vS5F' },
    <PackData>{ id: 71344, wave: 7.5, year: 2, minifigs: [], builds: [], name: 'Excalibur Batman', type: PackType.FunPack, image: 'wave-7.5-excalibur-batman-fun-pack', desc: '', amazon: null },
    <PackData>{ id: 71286, wave: 7.5, year: 2, minifigs: [], builds: [], name: 'Knight Rider', type: PackType.FunPack, image: 'wave-7.5-knight-rider-fun-pack', desc: '', amazon: null },

    <PackData>{ id: 71267, wave: 8, year: 2, minifigs: [], builds: [], name: 'The Goonies', type: PackType.LevelPack, image: 'wave-9-goonies-level-pack', desc: '', amazon: null },
    <PackData>{ id: 71266, wave: 8, year: 2, minifigs: [], builds: [], name: 'Chase McCain', type: PackType.FunPack, image: 'wave-8-chase-mccain-fun-pack', desc: '', amazon: null },
    <PackData>{ id: 71348, wave: 8, year: 2, minifigs: [], builds: [], name: 'Hermione Granger', type: PackType.FunPack, image: 'wave-8-hermione-granger-fun-pack', desc: '', amazon: null },

    <PackData>{ id: 71255, wave: 9, year: 2, minifigs: [], builds: [], name: 'Teen Titans Go!', type: PackType.TeamPack, image: 'wave-9-raven-fun-pack', desc: '', amazon: null },
    <PackData>{ id: 71349, wave: 9, year: 2, minifigs: [], builds: [], name: 'Beetlejuice', type: PackType.FunPack, image: 'wave-9-beetlejuice-fun-pack', desc: '', amazon: null }
/*
    { id: , wave: , year: , minifigs: [], builds: [], name: '', type: PackType.FunPack, image: '', desc: '' },
*/
];
