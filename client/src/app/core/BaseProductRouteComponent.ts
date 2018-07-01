import {
    ElementRef,
    OnDestroy,
    OnInit,
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

export class BaseProductRouteComponent extends BaseRouteComponent implements OnDestroy, OnInit {

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
    protected _products: ElementRef[] = [];
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

        this._eventIds = [
            this.eventService.register(AppEvent.SCROLL_TO_TOP, () => {
                this.domService.scrollToTop(this._container);
            })
        ];
    }

    public ngOnDestroy() {
        this._unregisterEvents(this.eventService, [
            AppEvent.SCROLL_TO_TOP
        ]);
    }
    public ngOnInit() {
        super.ngOnInit();

        if (this._container) {
            $(this._container.nativeElement).on('scroll', (e) => {
                let scrollTop = e.target.scrollTop;
                let dir = scrollTop - this._scrollTop;

                this._scrollTop = scrollTop;
                this._scrolled = (scrollTop > 0);

                // this.eventService.dispatch(AppEvent.SCROLL, scrollTop, dir);

                let i = this._products.length - 1;
                for (; i >= 0; i--) {
                    if (scrollTop >= this._products[i].nativeElement.offsetTop) {
                        break;
                    }
                }

                this.eventService.dispatch(AppEvent.SECTION_SUB_INDEX, i);
            });
        }
    }

    protected _onNavigationEnd(event: NavigationEnd): void {
        super._onNavigationEnd(event);

        this.product = this._getParam('product');

        if (this._urls.length < 2) {
            this.domService.scrollToTop(this._container);
        }
    }
    protected _onProduct(): void {
        let p = this.isNullOrEmpty(this._product) ? 'top' : this._product;
        let r = this[p] as ElementRef;
        if (r !== undefined) {
            this.domService.scrollIntoView(this._container, r);
        }
    }
}
