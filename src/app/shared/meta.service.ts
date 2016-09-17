import { Injectable, EventEmitter } from '@angular/core';
import { MetaModel } from './meta.model';

@Injectable()
export class MetaService {
    public eventEmitter: EventEmitter<MetaModel>;
    private metaModel: MetaModel;

    // Instatiate all the things
    constructor() {
        this.eventEmitter = new EventEmitter<MetaModel>();
        this.metaModel = new MetaModel();
    }

    // Populate universalModel and emit an event to notify subscribers that there is now something here
    public set(metaModel: MetaModel): void {
        this.metaModel = metaModel;
        this.eventEmitter.emit(this.metaModel);
    }

    setTitle(title: string) {
    //    this.title.setTitle(title);
    }

    public setDescription(description: string) {
        console.log(description);
    //    this.metaDescription.setAttribute('content', description);
    }

    /*private getOrCreateMetaElement(name: string): HTMLElement {
      let el: HTMLElement;
      el = this.DOM.querySelector(this.DOM.defaultDoc(), 'meta[name=' + name + ']');
      //el = document.querySelector('meta[name=' + name + ']');
      if (el === null || el === undefined) {
          console.log('meta desc element not found');
        el = this.DOM.createElement('meta');
        //el = document.createElement('meta');
        el.setAttribute('name', name);
        this.headElement.appendChild(el);
      } else {
          console.log(el.getAttribute('content'));
      }
      return el;
    }*/
};
