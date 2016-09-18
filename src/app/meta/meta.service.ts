import { Injectable, Inject, ElementRef, Renderer } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { MetaModel } from './meta.model';

@Injectable()
export class MetaService {
    private _r: Renderer;
    private _el: ElementRef;
    private _document: any;
    /**
     * Angular 2 Title Service
     */
    //private titleService: Title;
    /**
     * <head> Element of the HTML document
     */
    private headElement: any;//HTMLElement;
    /**
    <meta property="og:title" content="Title Here" />
    */
    private ogTitle: HTMLElement;
    /**
    <meta property="og:type" content="article" />
    */
    private ogType: HTMLElement;
    /**
    <meta property="og:url" content="http://www.example.com/" />
    */
    private ogUrl: HTMLElement;
    /**
    <meta property="og:image" content="http://example.com/image.jpg" />
    */
    private ogImage: HTMLElement;
    /**
    <meta property="og:description" content="Description Here" />
    */
    private ogDescription: HTMLElement;
    private description: HTMLElement;

    /**
     * Inject the Angular 2 Title Service
     * @param titleService
     */
    constructor(@Inject(DOCUMENT) private document, element: ElementRef, renderer: Renderer) {
        this._el = element;
        this._r = renderer;
        
        this._document = document;
        this.headElement = this._document.head;

        this.ogTitle = this.getOrCreateMetaElement('og:title', 'property');
        this.ogDescription = this.getOrCreateMetaElement('og:description', 'property');
        this.description = this.getOrCreateMetaElement('description', 'name');
    }

    public set(model: MetaModel) {
        this.setTitle(model.title, "Lego Dimensions Builder");
        this.setAttr(this.description, model.description);

        this.setAttr(this.ogTitle, model.title);
        this.setAttr(this.ogDescription, model.description);
    }

    public setTitle(siteTitle = '', pageTitle ='', separator = ' - '){
        let title = siteTitle;
        if (pageTitle != '') {
            title += separator + pageTitle;
        }
        this._document.title = title;
    }

    private getOrCreateMetaElement(name: string,attr: string): HTMLElement {

        let el: HTMLElement;
        var prop = ((attr != null)? attr : 'name');
        el = this._r.createElement(this.headElement,'meta',null);
        this._r.setElementAttribute(el,prop,name);
        
        return el;
    }

    private setAttr(el: HTMLElement, value: string) {
        this._r.setElementAttribute(el, 'content', value);
    }
}
