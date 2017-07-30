import {
    Component,
    OnInit,
    QueryList,
    ViewChildren
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    MdMenu
} from '@angular/material';
import {
    BaseNavRouteComponent
} from 'app/core';
import {
    AppRoute,
    MenuItem
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class AppHeaderComponent extends BaseNavRouteComponent implements OnInit {

    @ViewChildren('menu') public mainMenus: QueryList<MdMenu>;

    private _mainMenu: MenuItem[] = [];
    private _mobileMenu: MenuItem[] = [];
    private _searchText: string = '';
    private _showMenu: boolean = false;
    private _showSearch: boolean = false;
    private _sideMenu: MenuItem[] = [];

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        private stringService: StringService
    ) {
        super('AppHeaderComponent', router, routerService);
        this._stringService = stringService;
    }

    public ngOnInit() {
        super.ngOnInit();

        this._mainMenu = [
            {
                label: this._getString('installation', 'Installation'),
                routerLink: AppRoute.INSTALLATION,
                expanded: false,
                items: [
                    {
                        label: this._getString('elevators', 'Elevators'),
                        routerLink: AppRoute.INSTALLATION_ELEVATORS
                    },
                    {
                        label: this._getString('escalators', 'Escalators'),
                        routerLink: AppRoute.INSTALLATION_ESCALATORS
                    },
                    {
                        label: this._getString('autowalks', 'Autowalks'),
                        routerLink: AppRoute.INSTALLATION_AUTOWALKS
                    }
                ]
            },
            {
                label: this._getString('service-and-maintenance', 'Service & Maintenance'),
                routerLink: AppRoute.SERVICE_MAINTENANCE,
                // expanded: false,
                // items: [
                //     {
                //         label: this._getString('elevators', 'Elevators'),
                //         routerLink: AppRoute.SERVICE_MAINTENANCE_ELEVATORS
                //     },
                //     {
                //         label: this._getString('escalators', 'Escalators'),
                //         routerLink: AppRoute.SERVICE_MAINTENANCE_ESCALATORS
                //     },
                //     {
                //         label: this._getString('autowalks', 'Autowalks'),
                //         routerLink: AppRoute.SERVICE_MAINTENANCE_AUTOWALKS
                //     },
                //     {
                //         label: this._getString('foreigh-maintenance', 'Foreign Maintenance'),
                //         routerLink: AppRoute.SERVICE_MAINTENANCE_FOREIGN
                //     }
                // ]
            },
            {
                label: this._getString('modernization', 'Modernization'),
                routerLink: AppRoute.MODERNIZATION,
                // expanded: false,
                // items: [
                //     {
                //         label: this._getString('elevators', 'Elevators'),
                //         routerLink: AppRoute.MODERNIZATION_ELEVATORS
                //     },
                //     {
                //         label: this._getString('escalators', 'Escalators'),
                //         routerLink: AppRoute.MODERNIZATION_ESCALATORS
                //     },
                //     {
                //         label: this._getString('autowalks', 'Autowalks'),
                //         routerLink: AppRoute.MODERNIZATION_AUTOWALKS
                //     }
                // ]
            },
            {
                label: this._getString('projects', 'Projects'),
                routerLink: AppRoute.PROJECTS
            }
        ];
        this._sideMenu = [
            {
                label: this._getString('about', 'About'),
                routerLink: AppRoute.ABOUT
            },
            {
                label: this._getString('locations', 'Locations'),
                routerLink: AppRoute.LOCATIONS
            },
            {
                label: this._getString('contact', 'Contact'),
                routerLink: AppRoute.CONTACT
                // },
                // {
                //     label: this._getString('search', 'Search'),
                //     icon: 'search',
                //     command: () => {
                //         this._showSearch = !this._showSearch;
                //     }
            }
        ];
        this._mobileMenu = this._mainMenu.concat(this._sideMenu);
        this._mobileMenu.pop();
        this.menu = this._mainMenu.concat(this._sideMenu);
    }
    protected _navTo(url: string): void {
        this._showMenu = false;
        super._navTo(url);
    }
    private _onLogoClick(): void {
        this._navTo(AppRoute.HOME);
    }
    private _onMenuClick(item: MenuItem): void {
        super.onMenuClick(item);
        this._mainMenu.forEach((m) => {
            m.expanded = false;
        });
    }
    private _search(): void {
        if (!this.isNullOrEmpty(this._searchText)) {
            console.log(this._searchText);
            this._showSearch = false;
        }
    }
    private _toggleMenu(index: number, value: boolean): void {
        let m = this._mainMenu[index];
        m.expanded = value;
    }
}
