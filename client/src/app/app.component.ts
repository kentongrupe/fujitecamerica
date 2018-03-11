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
    private _contentPaddingTop: number = 0;
    private _contentTop: number = AppConstants.HEADER_HEIGHT;
    private _headerTop: number = 0;
    private _isHome: boolean = true;
    private _resources: MenuItem[] = [];
    private _sectionHeaderVisible: boolean = false;

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
        this.eventService.register(AppEvent.SECTION_HEADER_VISIBLE, (v) => {
            this._sectionHeaderVisible = v;
        });
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
        this.eventService.dispatch(AppEvent.SCROLL_TO_TOP);
    }
    protected _scrollToTop(): void {
        this._headerTop = 0;
        this._contentTop = AppConstants.HEADER_HEIGHT;
        this._contentPaddingTop = 0;
    }
    private _scroll(value: number, delta: number): void {
        // header
        let ht = this._headerTop - delta;
        if (delta < 0) {
            ht = Math.min(ht, 0);
        } else {
            ht = Math.max(ht, -AppConstants.HEADER_HEIGHT);
        }
        // this._headerTop = ht;
        // if (ht === -AppConstants.HEADER_HEIGHT) {
        //     this.eventService.dispatch(AppEvent.HEADER_VISIBLE, false);
        // } else if (ht === 0) {
        //     this.eventService.dispatch(AppEvent.HEADER_VISIBLE, true);
        // }

        // content
        let ct = this._contentTop - delta;
        if (delta < 0) {
            ct = Math.min(ct, AppConstants.HEADER_HEIGHT);
        } else {
            ct = Math.max(ct, 0);
        }
        this._contentTop = ct;

        // content padding-top
        let pt = this._contentPaddingTop - delta;
        if (delta < 0) {
            //
        } else {
            pt = Math.max(pt, AppConstants.HEADER_HEIGHT);
        }
        this._contentPaddingTop = Math.min(AppConstants.HEADER_HEIGHT, value);
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
