import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Piece, DataService, packTypeStrings } from './../data/index';

@Component({
	moduleId: module.id,
	selector: 'minifig-panel',
	templateUrl: 'minifig-panel.component.html',
    styleUrls: ['minifig-panel.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class MinifigPanelComponent {
    private packName: string;
    private _piece: Piece;

    constructor(private data: DataService) {
    }

    @Input() set piece(value: Piece) {
        let pack = this.data.getPack(value.packId);
        if (pack !== undefined) {
            this.packName = pack.name + " " + packTypeStrings[pack.type];
        } else {
            this.packName = value.packId.toString();
        }
        this._piece = value;
    }

    get piece() {
        return this._piece;
    }
}
