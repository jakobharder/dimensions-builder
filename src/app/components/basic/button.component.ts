import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'cmp-btn',
    styles: [`.btn.disabled {
        height: 38px;
        width: 38px;
        padding: 9px 11px;
        background: #1A4E95;
        color: #fff;
        opacity: 1;
    }
    .btn, .btn:link, .btn:visited {
        background: #3468AF;
        color: #fff;
    }
    .btn:hover, .btn:active, .btn:checked {
        background: #1A4E95;
        color: #fff;
    }
    `],
	template: `<div class="btn-group">
		<a class='btn disabled'><i class="fa fa-facebook" style="width:16px; height:20px"></i></a>
		<a class='btn ' [href]='_url' style="width:12em" rel="nofollow" target="_blank"> {{title}}</a>
	</div>`
})
export class ButtonComponent {
    @Input() title: string;
    @Input() set url(value: string) {
        this._url = 'http://www.facebook.com/sharer/sharer.php?u=' + value;
    }

    private _url: string;
}
