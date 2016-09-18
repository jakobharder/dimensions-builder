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

    /**
     * Inject the Angular 2 Title Service
     * @param titleService
     */
    constructor(@Inject(DOCUMENT) private document, element: ElementRef, renderer: Renderer) {
        this._el = element;
        this._r = renderer;
        //super();
        this._document = document;
        this.headElement = this._document.head;

        this.ogTitle = this.getOrCreateMetaElement('og:title','property');
        this.ogType = this.getOrCreateMetaElement('og:type','property');
        this.ogUrl = this.getOrCreateMetaElement('og:url','property');
        this.ogImage = this.getOrCreateMetaElement('og:image','property');
        this.ogDescription = this.getOrCreateMetaElement('og:description','property');
        
    }

    public set(model: MetaModel) {
        this.setOgDescription(model.description);
    }

    public setTitle(siteTitle = '',pageTitle ='',separator = ' / '){
        let title = siteTitle;
        if(pageTitle != '') title += separator + pageTitle;
        this._document.title = title;
    }
    /*
    *  Open graph
    */
    public setOgTitle(value: string) {
        this._r.setElementAttribute(this.ogTitle,'content',value);
    }
    public setOgType(value: string) {
        this._r.setElementAttribute(this.ogType,'content',value);
    }
    public setOgUrl(value: string) {
        this._r.setElementAttribute(this.ogUrl,'content',value);
    }
    public setOgImage(value: string) {
        this._r.setElementAttribute(this.ogImage,'content',value);
    }
    public setOgDescription(value: string) {
        this._r.setElementAttribute(this.ogDescription,'content',value);
    }
    /**
     * get the HTML Element when it is in the markup, or create it.
     * @param name
     * @returns {HTMLElement}
     */
    private getOrCreateMetaElement(name: string,attr: string): HTMLElement {

        let el: HTMLElement;
        var prop = ((attr != null)? attr : 'name');
        el = this._r.createElement(this.headElement,'meta',null);
        this._r.setElementAttribute(el,prop,name);
        
        return el;
    }
}
