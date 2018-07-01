import {
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    NavigationEnd,
    Router
} from '@angular/router';
import {
    Subscription
} from 'rxjs';
import {
    MenuItem
} from 'app/models';
import {
    RouterService
} from 'app/services';
import {
    BaseComponent
} from './BaseComponent';

export class BaseNavRouteComponent extends BaseComponent implements OnDestroy, OnInit {

    public activeItem: any;
    public hasChildren: boolean = false;

    @ViewChild('container')
    protected _container: ElementRef;
    @ViewChild('content')
    protected _content: ElementRef;
    protected _scrolled: boolean = false;
    protected _scrollToContent: boolean = false;
    protected _urls: string[] = [];

    protected _menu: MenuItem[] = [];
    public get menu(): MenuItem[] {
        return this._menu;
    }
    @Input()
    public set menu(value: MenuItem[]) {
        this._menu = value;
    }

    private _subscription: Subscription;

    constructor(
        className: string = 'BaseNavRouteComponent',
        protected _router: Router,
        protected _routerService: RouterService,
    ) {
        super(className);

        this._subscription = this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this._onNavigationEnd(event as NavigationEnd);
            }
        });
    }

    public ngOnDestroy() {
        this._subscription.unsubscribe();

        if (this._container) {
            this._container.nativeElement.removeEventListener('scroll', this._onScroll);
        }
    }
    public ngOnInit() {
        super.ngOnInit();

        if (this._container) {
            this._container.nativeElement.addEventListener('scroll', this._onScroll);
            this._onScroll(null);
        }
    }
    public isActive(m: any): boolean {
        return (this.activeItem !== undefined) && (this.activeItem !== null) && (m.label === this.activeItem.label);
    }
    public onMenuClick(item: MenuItem, event?: MouseEvent): void {
        this._preventDefault(event);
        if (!this.isNullOrEmpty(item.routerLink)) {
            this._navTo(item.routerLink);
        } else if (item.command !== undefined) {
            item.command();
        }
    }
    protected _navTo(url: string): void {
        this._routerService.to(url);
    }
    protected _onNavigationEnd(event: NavigationEnd): void {
        this._parseUrl(event.url);

        let item = this.menu.find((m) => {
            return (!this.isNullOrEmpty(m.routerLink) && event.url.startsWith(m.routerLink));
        });
        if ((item !== undefined) && (item !== this.activeItem)) {
            this.activeItem = item;
        } else {
            this.activeItem = null;
        }

        // if (this._scrollToContent && this._container) {
        //     let url = event.url.split('/').filter((u) => {
        //         return !this.isNullOrEmpty(u);
        //     });
        //     if (url.length > 1) {
        //         this._container.nativeElement.scrollTo(0, this._content.nativeElement.offsetTop);
        //         this._onScroll(null);
        //     } else {
        //         this._container.nativeElement.scrollTo(0, 0);
        //         this._scrolled = false;
        //     }
        // }
    }
    protected _parseUrl(url: string): void {
        this._urls = url.split('/').filter((u) => {
            return !this.isNullOrEmpty(u);
        });
    }
    private _onScroll(event: Event): void {
        if (this._container) {
            this._scrolled = (this._container.nativeElement.scrollTop > 0);
        }
    }
}
