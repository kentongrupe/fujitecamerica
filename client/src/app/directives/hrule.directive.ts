import {
    Directive,
    ElementRef,
    Renderer
} from '@angular/core';
import {
    BaseDirective
} from 'app/core';

declare const $;

@Directive({
    selector: '[hrule]'
})
export class HRuleDirective extends BaseDirective {

    constructor(el: ElementRef, renderer: Renderer) {
        super('HRuleDirective', el, renderer);

        let ne = $(el.nativeElement);
        ne.toggleClass('hrule', true);
        ne.html('<div class="hrule-arrow"></div>');
    }
}
