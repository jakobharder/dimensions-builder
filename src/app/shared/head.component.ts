import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { MetaModel } from './meta.model';
import { MetaService } from './meta.service';

@Component({
	moduleId: module.id,
	selector: 'head',
	templateUrl: 'head.component.html'
})
export class HeadComponent implements OnInit, OnDestroy {
    public metaModel: MetaModel;
    private subscriber: EventEmitter<MetaModel>;

    constructor(private meta: MetaService) {}

    public ngOnInit() {
        this.metaModel = new MetaModel();
        this.subscriber = this.meta.eventEmitter.subscribe((metaModel) => {
            this.metaModel = metaModel;
        });
    }

    public ngOnDestroy() {
        this.subscriber.unsubscribe();
    }
}
