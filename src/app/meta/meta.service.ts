import { Injectable, EventEmitter, Inject, ElementRef, Renderer } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MetaModel } from './meta.model';

@Injectable()
export class MetaService {
    public url: EventEmitter<string> = new EventEmitter<string>();
    public _url: string;
    public _safeurl: string;

    private _r: Renderer;
    private _el: ElementRef;
    private _document: any;

    private headElement: any;//HTMLElement;
    private ogTitle: HTMLElement;
    private ogType: HTMLElement;
    private ogUrl: HTMLElement;
    private ogImage: HTMLElement;
    private ogDescription: HTMLElement;
    private description: HTMLElement;
    private canonical: HTMLElement;

    constructor(@Inject(DOCUMENT) private document, 
                @Inject(Router) private router,
                element: ElementRef, 
                renderer: Renderer) {
        this._el = element;
        this._r = renderer;
        
        this._document = document;
        this.headElement = this._document.head;

        this.ogTitle = this.getOrCreateMetaElement('og:title', 'property');
        this.ogImage = this.getOrCreateMetaElement('og:image', 'property');
        this.ogDescription = this.getOrCreateMetaElement('og:description', 'property');
        this.ogUrl = this.getOrCreateMetaElement('og:url', 'property');
        this.description = this.getOrCreateMetaElement('description', 'name');
        this.canonical = this.getOrCreateCanonical();
    }

    public set(model: MetaModel) {
        this.setTitle(model.title, "Lego Dimensions Builder");
        this.setAttr(this.description, model.description);

        this.setAttr(this.ogTitle, model.title);
        this.setAttr(this.ogDescription, model.description);
        if (model.image) {
            this.setAttr(this.ogImage, 'http://dimensions-builder.com' + model.image);
        } else {
            this.setAttr(this.ogImage, 'http://dimensions-builder.com/assets/images/lego-dimensions.jpg');
        }

        if (model.canonical !== undefined) {
            this._url = 'http://dimensions-builder.com' + model.canonical;
        } else {
            this._url = 'http://dimensions-builder.com' + this.router.url;
        }
        this._safeurl = this._url.replace(':', '%3A');
        this.setAttr(this.ogUrl, this._url);
        this.setAttr(this.canonical, this._url, 'href');
        this.url.emit(this._url);
    }

    public setTitle(siteTitle = '', pageTitle ='', separator = ' - '){
        let title = siteTitle;
        if (!title) {
            title = pageTitle + separator + 'All about abilities, characters, levels and more';
        }
        else {
            if (pageTitle != '') {
                title += separator + pageTitle;
            }
        }
        this._document.title = title;
    }

    private getOrCreateMetaElement(name: string,attr: string): HTMLElement {
        let el: HTMLElement;
        var prop = ((attr != null)? attr : 'name');
        el = this._r.createElement(this.headElement, 'meta', null);
        this._r.setElementAttribute(el, prop, name);
        return el;
    }

    private getOrCreateCanonical(): HTMLElement {
        let el: HTMLElement;
        el = this._r.createElement(this.headElement, 'link', null);
        this._r.setElementAttribute(el, 'rel', 'canonical');
        return el;
    }

    private setAttr(el: HTMLElement, value: string, property: string = 'content') {
        this._r.setElementAttribute(el, property, value);
    }
}
