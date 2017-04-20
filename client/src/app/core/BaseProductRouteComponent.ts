import {
    Component,
    ElementRef
} from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    Router
} from '@angular/router';
import {
    BaseRouteComponent
} from './BaseRouteComponent';
import {
    DOMService
} from 'app/services';

export class BaseProductRouteComponent extends BaseRouteComponent {

    constructor(
        className: string = 'BaseProductRouteComponent',
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super(className, route, router);
    }

    protected _onNavigationEnd(event: NavigationEnd): void {
        super._onNavigationEnd(event);

        let product = this._getParam('product');

        if (!this.isNullOrEmpty(product)) {
            let r = this[product] as ElementRef;
            if (r !== undefined) {
                let y = r.nativeElement.offsetTop;
                this.domService.scrollTo(0, y);
            }
        }
    }
}
