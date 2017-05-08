import {
    Input,
    OnInit
} from '@angular/core';
import {
    NavigationEnd,
    Router
} from '@angular/router';
import {
    MenuItem
} from 'app/models';
import {
    RouterService
} from 'app/services';
import {
    BaseComponent
} from './BaseComponent';

export class BaseNavRouteComponent extends BaseComponent implements OnInit {

    public activeItem: any;
    public hasChildren: boolean = false;

    protected _menu: MenuItem[] = [];
    public get menu(): MenuItem[] {
        return this._menu;
    }
    @Input() public set menu(value: MenuItem[]) {
        this._menu = value;
    }

    constructor(
        className: string = 'BaseNavRouteComponent',
        protected _router: Router,
        protected _routerService: RouterService,
    ) {
        super(className);

        this._router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this._onNavigationEnd(event as NavigationEnd);
            }
        });
    }

    public ngOnInit() {
        super.ngOnInit();
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
        let item = this.menu.find((m) => {
            return (!this.isNullOrEmpty(m.routerLink) && event.url.startsWith(m.routerLink));
        });
        if ((item !== undefined) && (item !== this.activeItem)) {
            this.activeItem = item;
        } else {
            this.activeItem = null;
        }
    }
}
