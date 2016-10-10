import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'cmp-tweet',
    styles: [`.btn.disabled {
        height: 38px;
        width: 38px;
        padding: 9px 11px;
        background: #35AADC;
        color: #fff;
        opacity: 1;
    }
    .btn, .btn:link, .btn:visited {
        background: #4FC4F6;
        color: #fff;
    }
    .btn:hover, .btn:active, .btn:checked {
        background: #35AADC;
        color: #fff;
    }
    `],
	template: `<div class="btn-group">
		<a class='btn disabled'><i class="fa fa-twitter" style="width:16px; height:20px"></i></a>
		<a class='btn ' [href]='_url' style="width:12em" rel="nofollow" target="_blank"> {{title}}</a>
	</div>`
})
export class TweetComponent {
    @Input() title: string;
    @Input() set url(value: string) {
        this._url = value;
    }

    private _url: string;
}
