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

    protected _product: string = '';
    get product(): string {
        return this._product;
    }
    set product(value: string) {
        this._product = value;
        if (!this.isNullOrEmpty(value)) {
            this._onProduct();
        }
    }

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

        this.product = this._getParam('product');
    }
    protected _onProduct(): void {
        if (!this.isNullOrEmpty(this._product)) {
            let r = this[this._product] as ElementRef;
            if (r !== undefined) {
                let y = r.nativeElement.offsetTop;
                this.domService.scrollTo(0, y);
            }
        }
    }
}
