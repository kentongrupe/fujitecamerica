import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
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
                label: this._getString('maintenance', ' Maintenance'),
                routerLink: AppRoute.SERVICE_MAINTENANCE
            },
            {
                label: this._getString('modernization', 'Modernization'),
                routerLink: AppRoute.MODERNIZATION
            },
            {
                label: this._getString('installation', 'Installation'),
                routerLink: AppRoute.INSTALLATION
            },
            {
                label: this._getString('portfolio', 'Portfolio'),
                routerLink: AppRoute.PORTFOLIO
            },
            {
                label: this._getString('after-market-support', 'After-Market Support'),
                routerLink: AppRoute.SUPPORT
            },
            {
                label: this._getString('recommendations', 'Recommendations'),
                routerLink: AppRoute.RECOMMENDATIONS
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
}
