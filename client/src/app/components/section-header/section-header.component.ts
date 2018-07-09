import {
    Component,
    DoCheck,
    ElementRef,
    HostBinding,
    Input,
    OnDestroy,
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

declare const $;

@Component({
    selector: 'section-header',
    templateUrl: 'section-header.component.html'
})
export class SectionHeaderComponent extends BaseNavRouteComponent implements DoCheck, OnDestroy, OnInit {

    @Input()
    public showAll: boolean = false;

    private _background: string = '';
    private _bgHeight: number = AppConstants.SECTION_HEIGHT;
    private _bgTop: number = 0;
    private _hasMenuLabel: boolean = false;
    private _logoTop: number = AppConstants.SECTION_LOGO_TOP;
    private _menuLabel: string = '';
    private _menuTop: number = AppConstants.SECTION_MENU_TOP;
    private _sectionType: SectionType = SectionType.UNKNOWN;
    @HostBinding('style.top.px')
    private _top: number = AppConstants.HEADER_HEIGHT;
    private _topMenu: MenuItem[] = [];

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        private el: ElementRef,
        private eventService: EventService,
        private stringService: StringService
    ) {
        super('SectionHeaderComponent', router, routerService);
        this._stringService = stringService;

        this._eventIds = [
            this.eventService.register(AppEvent.RESIZE, () => {
                this._resize();
            }),
            this.eventService.register(AppEvent.SECTION_SUB_INDEX, (idx) => {
                this._selectSubMenuAt(idx);
            })
        ];
    }

    public ngDoCheck() {
        let c = $('div.content-div');
        let t = c.scrollTop();
        this._scroll(t);

        this._hasMenuLabel = !this.isNullOrEmpty(this._menuLabel);
    }
    public ngOnDestroy() {
        this._unregisterEvents(this.eventService, [
            AppEvent.RESIZE,
            AppEvent.SECTION_SUB_INDEX
        ]);
    }
    public ngOnInit() {
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
                    // this.eventService.dispatch(AppEvent.SCROLL_TO_TOP);
                }
            }
        }
    }
    private _init() {
        this._background = SectionType[this._sectionType].toClassName();
        this._menu = [];

        switch (this._sectionType) {
            case SectionType.ABOUT:
                this._menuLabel = this._getString('about-us', 'About Us');
                this._menu = [
                    {
                        label: this._getString('north-america', 'North America'),
                        routerLink: AppRoute.ABOUT_NORTH_AMERICA
                    },
                    {
                        label: this._getString('achievements', 'Achievements'),
                        routerLink: AppRoute.ABOUT_ACHIEVEMENTS
                    },
                    {
                        label: this._getString('history', 'History'),
                        routerLink: AppRoute.ABOUT_HISTORY
                    },
                    {
                        label: this._getString('deo-message', 'CEO Message'),
                        routerLink: AppRoute.ABOUT_CEO
                    },
                    {
                        label: this._getString('leadership', 'Leadership'),
                        routerLink: AppRoute.ABOUT_LEADERSHIP
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
                        label: this._getString('mrl', 'MRL'),
                        routerLink: AppRoute.ELEVATORS_MRL
                    },
                    {
                        label: this._getString('geared', 'Geared'),
                        routerLink: AppRoute.ELEVATORS_GEARED
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
                        label: this._getString('green-solutions', 'Green Solutions'),
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
            case SectionType.MAINTENANCE:
                this._menuLabel = this._getString('service-maintenance', 'Maintenance');
                this._menu = [
                    {
                        label: this._getString('service-stats', 'Service Stats'),
                        routerLink: AppRoute.MAINTENANCE_SERVICE_STATS
                    },
                    {
                        label: this._getString('why-fujitec', 'Why Fujitec'),
                        routerLink: AppRoute.MAINTENANCE_WHY_FUJITEC
                    },
                    {
                        label: this._getString('mechanic-routes', 'Mechanic Routes'),
                        routerLink: AppRoute.MAINTENANCE_MECHOANIC_ROUTES
                    },
                ];
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
    private _resize(): void {
        let W = $(this.el.nativeElement).find('.menu-content-div').width();
        let w = $(this.el.nativeElement).find('.menu-content-div .menu-items-div').width();
        let h = $(this.el.nativeElement).find('.menu-content-div .menu-items-div').height();

        // console.log(W, w, h);
    }
    private _scroll(value: number, delta?: number): void {
        // top
        let t = AppConstants.HEADER_HEIGHT - value;
        this._top = Math.max(0, t);

        // logo
        // let lt = this._logoTop + delta;
        // if (delta < 0) {
        //     // if (value < 130) {
        //     //     lt = Math.max(lt, -75);
        //     //     this._logoTop = lt;
        //     // }
        // } else {
        //     lt = Math.min(lt, 0);
        //     this._logoTop = lt;
        // }
        // this._logoTop = -value;
        let lt = AppConstants.SECTION_LOGO_TOP + value;
        this._logoTop = Math.min(0, lt);

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
        // let bt = this._bgTop - delta;
        // if (delta < 0) {
        //     // bt = Math.min(bt, 0);
        //     // this._bgTop = bt;
        // } else {
        //     if (value > AppConstants.HEADER_HEIGHT) {
        //         bt = Math.max(bt, -AppConstants.SECTION_BACKGROUND_HEIGHT);
        //         this._bgTop = bt;
        //     }
        // }
        if (value > AppConstants.HEADER_HEIGHT) {
            let bt = AppConstants.HEADER_HEIGHT - value;
            this._bgTop = Math.max(bt, -AppConstants.SECTION_BACKGROUND_HEIGHT);
        } else {
            this._bgTop = 0;
        }

        // menu
        // let mt = this._menuTop - delta;
        // if (delta < 0) {
        //     // mt = Math.min(mt, (AppConstants.SECTION_HEIGHT - AppConstants.SECTION_MENU_HEIGHT));
        //     // this._menuTop = mt;
        // } else {
        //     if (value > AppConstants.HEADER_HEIGHT) {
        //         mt = Math.max(mt, AppConstants.MENU_HEIGHT);
        //         this._menuTop = mt;
        //     }
        // }
        if (value > AppConstants.HEADER_HEIGHT) {
            let mt = (AppConstants.HEADER_HEIGHT + AppConstants.SECTION_MENU_TOP) - value;
            this._menuTop = Math.max(mt, AppConstants.MENU_HEIGHT);
        } else {
            this._menuTop = AppConstants.SECTION_MENU_TOP;
        }
    }
    private _selectSubMenuAt(index: number): void {
        //
    }
}
