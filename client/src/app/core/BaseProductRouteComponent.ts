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
    AppEvent
} from 'app/models/AppEvent';
import {
    AppRoute
} from 'app/models/AppRoute';
import {
    DOMService,
    EventService
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

    private _scrollTop: number = 0;

    constructor(
        className: string = 'BaseProductRouteComponent',
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super(className, route, router);
    }

    public ngOnInit() {
        super.ngOnInit();

        if (this._container) {
            $(this._container.nativeElement).on('scroll', (e) => {
                let scrollTop = e.target.scrollTop;
                let dir = scrollTop - this._scrollTop;

                this._scrollTop = scrollTop;
                this._scrolled = (scrollTop > 0);

                this.eventService.dispatch(AppEvent.SCROLL, scrollTop, dir);
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
