import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {
    NavigationEnd,
    Router
} from '@angular/router';
import {
    BaseNavRouteComponent
} from 'app/core';
import {
    AppConstants,
    AppEvent,
    AppRoute,
    MenuItem,
    SectionType
} from 'app/models';
import {
    EventService,
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'section-header',
    templateUrl: 'section-header.component.html'
})
export class SectionHeaderComponent extends BaseNavRouteComponent implements OnInit {

    private _background: string = '';
    private _bgHeight: number = AppConstants.SECTION_HEIGHT;
    private _bgTop: number = 0;
    private _logoTop: number = -73;
    private _menuLabel: string = '';
    private _menuTop: number = AppConstants.SECTION_HEIGHT - AppConstants.SECTION_MENU_HEIGHT;
    private _sectionType: SectionType = SectionType.UNKNOWN;
    private _topMenu: MenuItem[] = [];

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        protected stringService: StringService,
        private eventService: EventService
    ) {
        super('SectionHeaderComponent', router, routerService);
        this._stringService = stringService;

        this.eventService.register(AppEvent.SCROLL, (t, d) => {
            this._scroll(t, d);
        });
        this.eventService.register(AppEvent.SCROLL_TO_TOP, () => {
            this._scrollToTop();
        });
    }

    public ngOnInit() {
        super.ngOnInit();

        this._topMenu = [
            {
                label: this._getString('elevators', 'Elevators'),
                routerLink: AppRoute.ELEVATORS
            },
            {
                label: this._getString('escalators', 'Escalators'),
                routerLink: AppRoute.ESCALATORS
            },
            {
                label: this._getString('controls-n-dispatch', 'Controls & Dispatch'),
                routerLink: AppRoute.DISPATCH
            },
            {
                label: this._getString('autowalks', 'Autowalks'),
                routerLink: AppRoute.AUTOWALKS
            }
        ];

        this._init();
    }
    protected _onNavigationEnd(event: NavigationEnd): void {
        this._parseUrl(event.url);

        let url = this._urls[0];

        if (!this.isNullOrEmpty(url)) {
            this._sectionType = SectionType[url.toEnumName()];

            if (this.hasValue(this._sectionType)) {
                this._init();

                if (url.length < 2) {
                    this.eventService.dispatch(AppEvent.SCROLL_TO_TOP);
                }
            }
        }
    }
    protected _scrollToTop(): void {
        this._bgHeight = AppConstants.SECTION_HEIGHT;
        this._bgTop = 0;
        this._logoTop = -73;
        this._menuTop = AppConstants.SECTION_HEIGHT - AppConstants.SECTION_MENU_HEIGHT;
    }
    private _init() {
        this._background = SectionType[this._sectionType].toClassName();
        this._menu = [];

        switch (this._sectionType) {
            case SectionType.ABOUT:
                this._menuLabel = this._getString('about-us', 'About Us');
                this._menu = [
                    {
                        label: this._getString('leadership', 'Leadership'),
                        routerLink: AppRoute.ABOUT_LEADERSHIP
                    },
                    {
                        label: this._getString('deo-message', 'CEO Message'),
                        routerLink: AppRoute.ABOUT_CEO
                    }
                ];
                break;
            case SectionType.AUTOWALKS:
                this._menuLabel = this._getString('autowalks', 'Autowalks: GS8100');
                this._menu = [
                    {
                        label: this._getString('type-s', 'Type S'),
                        routerLink: AppRoute.AUTOWALKS_TYPE_S
                    },
                    {
                        label: this._getString('type-f', 'Type F'),
                        routerLink: AppRoute.AUTOWALKS_TYPE_F
                    },
                    {
                        label: this._getString('type-p', 'Type P'),
                        routerLink: AppRoute.AUTOWALKS_TYPE_P
                    }
                ];
                break;
            case SectionType.DISPATCH:
                this._menuLabel = this._getString('controls-dispatch', 'Controls & Dispatch');
                this._menu = [
                    {
                        label: this._getString('group-supervisory-control', 'Group Supervisory Control'),
                        routerLink: AppRoute.DISPATCH_FLEXNX
                    },
                    {
                        label: this._getString('destination-dispatching', 'Destination Dispatching'),
                        routerLink: AppRoute.DISPATCH_EZSHUTTLE
                    }
                ];
                break;
            case SectionType.ELEVATORS:
                this._menuLabel = this._getString('elevators', 'Elevators');
                this._menu = [
                    {
                        label: this._getString('gearless', 'Gearless'),
                        routerLink: AppRoute.ELEVATORS_GEARLESS
                    },
                    {
                        label: this._getString('geared', 'Geared'),
                        routerLink: AppRoute.ELEVATORS_GEARED
                    },
                    {
                        label: this._getString('mrl', 'MRL'),
                        routerLink: AppRoute.ELEVATORS_MRL
                    },
                    {
                        label: this._getString('hydro', 'Hydro'),
                        routerLink: AppRoute.ELEVATORS_HYDRAULIC
                    },
                    {
                        label: this._getString('monitoring', 'Monitoring'),
                        routerLink: AppRoute.ELEVATORS_MONITORING
                    },
                    {
                        label: this._getString('clean-air-cab', 'Clean Air Cab'),
                        routerLink: AppRoute.ELEVATORS_IONFUL
                    }
                ];
                break;
            case SectionType.ESCALATORS:
                this._menuLabel = this._getString('escalators', 'Escalators: GS8000');
                this._menu = [
                    {
                        label: this._getString('type-s', 'Type S'),
                        routerLink: AppRoute.ESCALATORS_TYPE_S
                    },
                    {
                        label: this._getString('type-f', 'Type F'),
                        routerLink: AppRoute.ESCALATORS_TYPE_F
                    },
                    {
                        label: this._getString('type-p', 'Type P'),
                        routerLink: AppRoute.ESCALATORS_TYPE_P
                    }
                ];
                break;
            case SectionType.INSTALLATION:
                this._menuLabel = this._getString('installation', 'Installation');
                break;
            case SectionType.MODERNIZATION:
                this._menuLabel = this._getString('modernization', 'Modernization');
                this._menu = [
                    {
                        label: this._getString('benefits', 'Benefits'),
                        routerLink: AppRoute.MODERNIZATION_BENEFITS
                    },
                    {
                        label: this._getString('assessment', 'Assessment'),
                        routerLink: AppRoute.MODERNIZATION_ASSESSMENT
                    },
                    {
                        label: this._getString('process', 'Process'),
                        routerLink: AppRoute.MODERNIZATION_PROCESS
                    },
                    {
                        label: this._getString('why-namo', 'Why NAMO'),
                        routerLink: AppRoute.MODERNIZATION_WHY_NAMO
                    }
                ];
                break;
            case SectionType.PORTFOLIO:
                this._menuLabel = this._getString('portfolio', 'Portfolio');
                break;
            case SectionType.RECOMMENDATIONS:
                this._menuLabel = this._getString('recommendations', 'Recommendations');
                break;
            case SectionType.SERVICE_MAINTENANCE:
                this._menuLabel = this._getString('service-maintenance', 'Maintenance');
                break;
            case SectionType.SUPPORT:
                this._menuLabel = this._getString('after-market-support', 'After-Market Support');
                break;
            default:
                break;
        }
    }
    private _resetView(): void {
        this.eventService.dispatch(AppEvent.SCROLL_TO_TOP);
    }
    private _scroll(value: number, delta: number): void {
        // logo
        let lt = this._logoTop + delta;
        if (delta < 0) {
            // if (value < 130) {
            //     lt = Math.max(lt, -75);
            //     this._logoTop = lt;
            // }
        } else {
            lt = Math.min(lt, 0);
            this._logoTop = lt;
        }

        // bg
        // let bh = this._bgHeight - delta;
        // if (delta < 0) {
        //     bh = Math.min(bh, AppConstants.SECTION_HEIGHT);
        //     this._bgHeight = bh;
        // } else {
        //     if (value > AppConstants.HEADER_HEIGHT) {
        //         bh = Math.max(bh, (AppConstants.MENU_HEIGHT + AppConstants.SECTION_MENU_HEIGHT));
        //         // this._bgHeight = bh;
        //     }
        // }
        let bt = this._bgTop - delta;
        if (delta < 0) {
            // bt = Math.min(bt, 0);
            // this._bgTop = bt;
        } else {
            if (value > AppConstants.HEADER_HEIGHT) {
                bt = Math.max(bt, -AppConstants.SECTION_BACKGROUND_HEIGHT);
                this._bgTop = bt;
            }
        }

        // menu
        let mt = this._menuTop - delta;
        if (delta < 0) {
            // mt = Math.min(mt, (AppConstants.SECTION_HEIGHT - AppConstants.SECTION_MENU_HEIGHT));
            // this._menuTop = mt;
        } else {
            if (value > AppConstants.HEADER_HEIGHT) {
                mt = Math.max(mt, AppConstants.MENU_HEIGHT);
                this._menuTop = mt;
            }
        }
    }
}
