import {
    Component,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    NavigationEnd,
    Router
} from '@angular/router';
import {
    BaseNavRouteComponent
} from 'app/core';
import {
    AlertModal,
    LoginModal
} from 'app/modals';
import {
    AppConstants,
    AppEvent,
    AppRoute,
    MenuItem,
    UserRole
} from 'app/models';
import {
    AuthenticationService,
    DataService,
    DOMService,
    EventService,
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'app',
    templateUrl: `app.component.html`
})
export class AppComponent extends BaseNavRouteComponent implements OnInit {

    @ViewChild('alert')
    private _alert: AlertModal;
    @ViewChild('login')
    private _login: LoginModal;

    private _alertMessage: string = '';
    private _alerTitle: string = '';
    private _animateTop: boolean = false;
    private _contentPaddingTop: number = 0;
    private _contentTop: number = AppConstants.HEADER_HEIGHT;
    private _headerTop: number = 0;
    private _isHome: boolean = true;
    private _resources: MenuItem[] = [];
    private _sectionHeaderTop: number = AppConstants.HEADER_HEIGHT;
    private _sectionHeaderVisible: boolean = false;
    private _showAllSectionHeader: boolean = false;
    private _showFooter: boolean = false;

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        private authService: AuthenticationService,
        private dataService: DataService,
        private domService: DOMService,
        private eventService: EventService,
        private stringService: StringService
    ) {
        super('AppComponent', router, routerService);
        this._stringService = stringService;

        this.eventService.register(AppEvent.INIT_COMPLETE, () => {
            this.routerService.to(AppRoute.HOME);
        });
        this.eventService.register(AppEvent.SCROLL, (t, d) => {
            this._scroll(t, d);
        });
        this.eventService.register(AppEvent.SCROLL_TO_TOP, () => {
            this._scrollToTop();
        });
        // this.eventService.register(AppEvent.SECTION_HEADER_VISIBLE, (v) => {
        //     this._sectionHeaderVisible = v;
        // });
        this.eventService.register(AppEvent.SHOW_RESOURCE, (r) => {
            this._showResource(r);
        });
    }

    public ngOnInit() {
        this._resources = [
            {
                label: this._getString('consulting-firms', 'Consulting Firms'),
                icon: 'consulting',
                routerLink: AppRoute.CONSULTANTS
            },
            {
                label: this._getString('property-management-cos', 'Property Management Cos'),
                icon: 'property',
                routerLink: AppRoute.PROPERTY_MANAGERS
            },
            {
                label: this._getString('architects-general-contractors', 'Architects & General Contractors'),
                icon: 'contractors',
                routerLink: AppRoute.ARCHITECTS
            },
        ];
    }

    protected _onNavigationEnd(event: NavigationEnd): void {
        super._onNavigationEnd(event);
        this._isHome = (event.url === AppRoute.HOME);

        this._showAllSectionHeader = true;
        this._showFooter = false;

        switch (event.url) {
            case AppRoute.HOME:
                this._showFooter = true;
            case AppRoute.PRIVACY_POLICY:
            case AppRoute.SITE_MAP:
            case AppRoute.SITE_POLICY:
                this._sectionHeaderVisible = false;
                break;
            case AppRoute.CONTACT:
            case AppRoute.LOCATIONS:
                this._showAllSectionHeader = false;
                this._showFooter = true;
            default:
                this._sectionHeaderVisible = true;
                break;
        }

        if (this._urls.length < 2) {
            this.eventService.dispatch(AppEvent.SCROLL_TO_TOP);
        }
    }
    protected _scrollToTop(): void {
        this._animateTop = true;
        setTimeout(() => {
            this._animateTop = false;
        }, 1000);

        this._headerTop = 0;
        this._contentTop = AppConstants.HEADER_HEIGHT;
        this._contentPaddingTop = 0;
        this._sectionHeaderTop = AppConstants.HEADER_HEIGHT;
    }

    private _exportStrings(): void {
        this.stringService.export();
    }
    private _scroll(value: number, delta: number): void {
        if ((delta < 0) && (value < 530)) {
            this.eventService.dispatch(AppEvent.SCROLL_TO_TOP);
            return;
        }

        // section header
        let st = this._sectionHeaderTop - delta;
        if (delta < 0) {
            if (value > 5) {
                // st = Math.min(st, AppConstants.HEADER_HEIGHT);
                // this._sectionHeaderTop = st;
            }
        } else {
            st = Math.max(st, 0);
            this._sectionHeaderTop = st;
        }

        // content
        // let ct = this._contentTop - delta;
        // if (delta < 0) {
        //     ct = Math.min(ct, AppConstants.HEADER_HEIGHT);
        // } else {
        //     ct = Math.max(ct, 0);
        // }
        // this._contentTop = ct;

        // content padding-top
        // let pt = this._contentPaddingTop - delta;
        // pt = Math.max(pt, AppConstants.HEADER_HEIGHT);
        // if (delta < 0) {
        // if (pt <= AppConstants.HEADER_HEIGHT) {
        //     // this.eventService.dispatch(AppEvent.SCROLL_TO_TOP);
        //     return;
        // }
        // }
        // this._contentPaddingTop = Math.min(AppConstants.HEADER_HEIGHT, value);
    }
    private _showResource(resource: MenuItem): void {
        let route = resource.routerLink;
        let _checkUserRole = (userRole) => {
            let isValidUser = false;
            switch (userRole) {
                case UserRole.ARCHITECT:
                    isValidUser = (route === AppRoute.ARCHITECTS);
                    break;
                case UserRole.CONSULTANT:
                    isValidUser = (route === AppRoute.CONSULTANTS);
                    break;
                case UserRole.PROPERTY_MANAGER:
                    isValidUser = (route === AppRoute.PROPERTY_MANAGERS);
                    break;
                default:
                    break;
            }
            return isValidUser;
        };

        let _showAlert = () => {
            this._alerTitle = this._getString('error', 'Error');
            this._alertMessage = this._getString('invalid-user-role-for-n', 'Invalid user role for {0}').format(route);
            this._alert.show();
        };

        // if (this.authService.isLoggedIn) {
        //     if (_checkUserRole(this.authService.currentUser.userRole)) {
        //         return;
        //     } else {
        //         _showAlert();
        //         return;
        //     }
        // }

        // this._login.show();

        this.routerService.to(route);
    }
}
