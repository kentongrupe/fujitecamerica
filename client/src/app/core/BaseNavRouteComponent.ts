import {
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
    public set menu(value: MenuItem[]) {
        this._menu = value;
        if (value.length > 0) {
            this.activeItem = value[0];
        }
    }
    public get menu(): MenuItem[] {
        return this._menu;
    }

    constructor(
        className: string = 'BaseNavRouteComponent',
        protected router: Router,
        protected routerService: RouterService,
    ) {
        super(className);

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this._onNavigationEnd(event as NavigationEnd);
            }
        });
    }

    public ngOnInit() {
        super.ngOnInit();
    }
    public isActive(m: any): boolean {
        return (this.activeItem !== null) && (m.label === this.activeItem.label);
    }
    public onMenuClick(item: MenuItem, event: MouseEvent): void {
        this._preventDefault(event);
        if (!this.isNullOrEmpty(item.routerLink)) {
            this._navTo(item.routerLink);
        } else if (item.command !== undefined) {
            item.command();
        }
    }
    protected _navTo(url: string): void {
        this.routerService.to(url);
    }
    protected _onNavigationEnd(event: NavigationEnd): void {
        let self = this;
        if (event.url === '/') {
            self.activeItem = null;
        } else {
            let item = self.menu.find((m) => {
                return (!this.isNullOrEmpty(m.routerLink) && event.url.startsWith(m.routerLink));
            });
            if ((item !== undefined) && (item !== self.activeItem)) {
                self.activeItem = item;
            }
        }
    }
}
