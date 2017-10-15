import {
    Component,
    ElementRef,
    ViewChild
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

    @ViewChild('top') public top: ElementRef;

    protected _product: string = '';
    public get product(): string {
        return this._product;
    }
    public set product(value: string) {
        this._product = value;
        this._onProduct();
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
        let p = this.isNullOrEmpty(this._product) ? 'top' : this._product;
        let r = this[p] as ElementRef;
        if (r !== undefined) {
            this.domService.scrollIntoView(r.nativeElement);
        }
    }
}
