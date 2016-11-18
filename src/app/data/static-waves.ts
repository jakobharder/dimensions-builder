
export class WaveData {
    year: number;
    release: string;
    wave: number;
    released: boolean;
    image: string;
    buyersGuide: string;
    video: string;
}

export const waves: WaveData[] = [
    <WaveData>{ year: 1, wave: 1, release: "September 2015", released: true, image: null },
    <WaveData>{ year: 1, wave: 2, release: "November 2015", released: true, image: null },
    <WaveData>{ year: 1, wave: 3, release: "January 2016", released: true, image: null },
    <WaveData>{ year: 1, wave: 4, release: "March 2016", released: true, image: null },
    <WaveData>{ year: 1, wave: 5, release: "May 2016", released: true, image: null },
    <WaveData>{ year: 2, wave: 6, release: "September 2016", released: true, image: 'wave-6', buyersGuide: 'Personally, I enjoyed Adventure Time a lot, and I can also recommend the Jake and Lumpy Space Princess Team Pack. Jake has so many abilities that replace Year 1 characters you can retire then. Ethan Hunt has super-many abilities, pick him up and you have a fun level, another world and a character for many situations. If you don\'t have the Wicked Witch yet, the Harry Potter Team Pack is great. Both Lord Voldemort has all the abilities from the Wicked Witch and some more. Diffindo is also used a lot in the other levels, worlds.' },
    <WaveData>{ year: 2, wave: 7, release: "November 2016", released: false, image: 'wave-7', buyersGuide: 'First of all, go for the franchises you like rather than for the abilities. I don\'t expect any pack to be much better than the others. Telekinesis from E.T. and Marceline could be interesting and potentially used a lot. I suggest to pick up at least the E.T. Fun Pack.', video: '_dvqQVH3UwY' },
    <WaveData>{ year: 2, wave: 7.5, release: "February 2017", released: false, image: 'wave-7.5', buyersGuide: 'Too few information to give any advise.' },
    <WaveData>{ year: 2, wave: 9, release: "??", released: false, image: null, buyersGuide: 'Too few information to give any advise.'  },
];
