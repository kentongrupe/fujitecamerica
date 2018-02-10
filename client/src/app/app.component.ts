import {
    Component,
    ElementRef,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren
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
    AppEvent,
    AppRoute,
    MenuItem,
    NavMenuDirection,
    Testimonial,
    TestimonialMode,
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
    @ViewChildren('refs')
    private _refDivs: QueryList<ElementRef>;

    private _activeIndex: number = 0;
    private _activeSubIndex: number = 0;
    private _alertMessage: string = '';
    private _alerTitle: string = '';
    private _hideHeader: boolean = false;
    private _initComplete: boolean = false;
    private _intervalId: any = null;
    private _isHome: boolean = true;
    private _menuDirection: NavMenuDirection = NavMenuDirection.SIDE;
    private _references: Testimonial[] = [];
    private _resources: MenuItem[] = [];
    private _submenu: MenuItem[] = [];

    private TestimonialMode = TestimonialMode;

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

        eventService.register(AppEvent.INIT_COMPLETE, () => {
            this._initComplete = true;
            this.routerService.to(AppRoute.HOME);
        });
        eventService.register(AppEvent.SHOW_HEADER, () => {
            this._hideHeader = false;
        });
        eventService.register(AppEvent.HIDE_HEADER, () => {
            this._hideHeader = true;
        });
    }

    public ngOnInit() {
        this.dataService.getTestimonials((d) => {
            if (this.hasValue(d.testimonials) && this.hasValue(d.testimonials[StringService.locale])) {
                this._references = d.testimonials[StringService.locale].map((t) => {
                    return new Testimonial(t);
                });

                Promise.resolve()
                    .then(() => {
                        if (this._refDivs !== undefined) {
                            this._initRefs();
                        }
                    });
            }
        });

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

        let url = '/' + event.url.split('/')[1];

        switch (url) {
            case AppRoute.ABOUT:
                this._submenu = [
                    {
                        label: this._getString('ceo-message', 'CEO Message'),
                        routerLink: AppRoute.ABOUT,
                        url: 'message'
                    },
                    {
                        label: this._getString('leadership', 'Leadership'),
                        routerLink: AppRoute.ABOUT,
                        url: 'leadership'
                    },
                    {
                        label: this._getString('history', 'History'),
                        routerLink: AppRoute.ABOUT,
                        url: 'history'
                    },
                    {
                        label: this._getString('mission', 'Mission'),
                        routerLink: AppRoute.ABOUT,
                        url: 'mission'
                    }
                ];
                break;
            default:
                this._submenu = [];
                break;
        }

        if (this._submenu.length > 0) {
            this._activeSubIndex = this._submenu.findIndex((m) => {
                return (event.url.endsWith(m.url));
            });

            if (this._activeSubIndex < 0) {
                this._activeSubIndex = 0;
            }
        }
    }
    private _exportStrings(): void {
        this.stringService.export();
    }
    private _initRefs(): void {
        this._intervalId = setInterval(() => {
            this._showRef();
        }, 10000);
        this._showRef(true);
    }
    private _onSubmenuClick(item: MenuItem): void {
        this._navTo('{0}/{1}'.format(item.routerLink, item.url));
    }
    private _showRef(isInit: boolean = false): void {
        if (isInit) {
            this._references[0].mode = 1;
        } else {
            this._references[this._activeIndex++].mode = 2;
            if (this._activeIndex >= this._references.length) {
                this._activeIndex = 0;
            }
            this._references[this._activeIndex].mode = 1;
        }
        setTimeout(() => {
            let idx = ((this._activeIndex === 0) ? this._references.length : this._activeIndex) - 1;
            this._references[idx].mode = 0;
        }, 1000);
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
