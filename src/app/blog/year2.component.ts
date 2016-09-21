import { Component, OnInit } from '@angular/core';
import { MetaService } from './../meta';

@Component({
	moduleId: module.id,
	selector: 'page-year2',
	templateUrl: 'year2.component.html'
})
export class Year2Component implements OnInit {
    private title: string;
    
    constructor(private meta: MetaService) {
    }
    
    ngOnInit() {
        this.title = "Packs, Characters and Vehicles we get in Year 2";
        this.meta.set({
            title: this.title,
            description: "An overview of all the Lego Dimensions packs coming in year 2 with details about the characters, vehicles and their abilities.",
            image: ''
        });
    }
}
