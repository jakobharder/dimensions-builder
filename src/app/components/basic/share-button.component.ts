import { Component, Input } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'share-button',
    styles: [`.btn.disabled {
        height: 38px;
        width: 38px;
        padding: 9px 11px;
        color: #fff;
        opacity: 1;
    }
    .btn, .btn:link, .btn:visited, .btn:hover, .btn:active, .btn:checked {
        color: #fff;
    }
    .btn-facebook, .btn-facebook:link, .btn-facebook:visited {
        background: #3468AF;
    }
    .btn-facebook.disabled, .btn-facebook:hover, .btn-facebook:active, .btn-facebook:checked {
        background: #1A4E95;
    }
    .btn-youtube, .btn-youtube:link, .btn-youtube:visited {
        background: #e64c65;
    }
    .btn-youtube.disabled, .btn-youtube:hover, .btn-youtube:active, .btn-youtube:checked {
        background: #cc324b;
    }
    .btn-twitter, .btn-twitter:link, .btn-twitter:visited {
        background: #4FC4F6;
    }
    .btn-twitter.disabled, .btn-twitter:hover, .btn-twitter:active, .btn-twitter:checked {
        background: #35AADC;
    }
    `],
	template: `<div class="btn-group">
		<a [attr.class]="'btn disabled btn-' + type"><i [attr.class]="'fa fa-' + type" style="width:16px; height:20px"></i></a>
		<a [attr.class]="'btn btn-' + type" [href]='_url' style="width:12em" rel="nofollow" target="_blank"> {{title}}</a>
	</div>`
})
export class ShareButtonComponent {
    @Input() title: string;
    @Input() set url(value: string) {
        this._url = value;
    }
    private _url: string;
    @Input() type: string;
}
