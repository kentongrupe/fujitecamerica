import {
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    Router
} from '@angular/router';
import {
    Observable
} from 'rxjs/Observable';
import {
    BaseRouteComponent
} from './BaseRouteComponent';
import {
    AppRoute
} from 'app/models/AppRoute';
import {
    DOMService
} from 'app/services';

declare const $;

export class BaseProductRouteComponent extends BaseRouteComponent implements OnInit {

    protected _product: string = '';
    public get product(): string {
        return this._product;
    }
    public set product(value: string) {
        this._product = value;
        this._onProduct();
    }
    @ViewChild('container')
    protected _container: ElementRef;
    protected _scrolled: boolean = false;

    protected AppRoute = AppRoute;

    constructor(
        className: string = 'BaseProductRouteComponent',
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super(className, route, router);
    }

    public ngOnInit() {
        super.ngOnInit();

        if (this._container) {
            $(this._container.nativeElement).on('scroll', (e) => {
                this._scrolled = (e.target.scrollTop > 0);
            });
        }
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
    protected _scrollToTop(): void {
        if (this._container) {
            this._container.nativeElement.scrollTo(0, 0);
        }
    }
}
