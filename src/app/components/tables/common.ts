import { Pipe, Injectable, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limitFilter',
    pure: false
})
@Injectable()
export class LimitFilter implements PipeTransform {
    transform(items: any[], args: number): any {
        let texts = [];
		for (let i = 0; i < 3 && items.length > i; i++) {
			texts.push(items[i].name);
		}
		if (items.length > 3) {
			texts.push("and " + (items.length - 3) + " more");
		}
		else if (items.length == 0) {
			texts.push("none");
		}
        return texts;
    }
}
