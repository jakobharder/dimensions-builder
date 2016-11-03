import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES } from '@angular/router';
/*
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(sanitizer: DomSanitizationService) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} */

@Component({
	moduleId: module.id,
	selector: 'cmp-youtube',
	templateUrl: 'youtube.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class YoutubeComponent {
    @Input() set url(value: string) {
        this._value = value;
        this._updateUrl();
    }
    private _value: string;
    private _url: SafeResourceUrl;

    @Input() set autoloop(value: boolean) {
        this._autoloop = value;
        this._updateUrl();
    }
    private _autoloop: boolean = false;

    constructor(private sanitizer: DomSanitizationService) {
    }

    private _updateUrl() {
        let autoloop = this._autoloop ? ('?controls=0&amp;rel=0&amp;fs=0&amp;showinfo=0') : '';
        this._url = this.sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/' + this._value + autoloop);
    }
}
