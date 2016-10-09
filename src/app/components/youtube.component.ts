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
        this._url = this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
    private _url:  SafeResourceUrl;

    constructor(private sanitizer: DomSanitizationService) {
    }
}
