import {
    ElementRef,
    Renderer
} from '@angular/core';
import {
    BaseClass
} from './BaseClass';
import {
    StringService
} from 'app/services';

export class BaseDirective extends BaseClass {

    public locale: string = 'en';

    protected elementRef: ElementRef;
    protected renderer: Renderer;

    constructor(className: string = 'BaseDirective', el: ElementRef, renderer: Renderer) {
        super(className);
        this.elementRef = el;
        this.renderer = renderer;
        // this.locale = StringService.locale;
    }
}
