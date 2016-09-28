
export class WaveData {
    year: number;
    release: string;
    wave: number;
    released: boolean;
    image: string;
}

export const waves: WaveData[] = [
    { year: 1, wave: 1, release: "September 2015", released: true, image: null },
    { year: 1, wave: 2, release: "November 2015", released: true, image: null },
    { year: 1, wave: 3, release: "January 2016", released: true, image: null },
    { year: 1, wave: 4, release: "March 2016", released: true, image: null },
    { year: 1, wave: 5, release: "May 2016", released: true, image: null },
    { year: 2, wave: 6, release: "September 2016", released: true, image: null },
    { year: 2, wave: 7, release: "November 2016", released: false, image: null },
    { year: 2, wave: 7.5, release: "February 2017", released: false, image: 'wave-7.5' },
];
