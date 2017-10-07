import {
    Component,
    ElementRef,
    OnInit,
    QueryList,
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
    AppEvent,
    AppRoute,
    MenuItem,
    NavMenuDirection,
    Testimonial,
    TestimonialMode
} from 'app/models';
import {
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

    @ViewChildren('refs') private _refDivs: QueryList<ElementRef>;

    private _activeIndex: number = 0;
    private _activeSubIndex: number = 0;
    private _initComplete: boolean = false;
    private _intervalId: any = null;
    private _isHome: boolean = true;
    private _menuDirection: NavMenuDirection = NavMenuDirection.SIDE;
    private _references: Testimonial[] = [];
    private _submenu: MenuItem[] = [];
    private TestimonialMode = TestimonialMode;

    constructor(
        protected router: Router,
        protected routerService: RouterService,
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
    }

    public ngOnInit() {
        this.dataService.getTestimonials((d) => {
            this._references = d.testimonials[StringService.locale].map((t) => {
                return new Testimonial(t);
            });

            Promise.resolve()
                .then(() => {
                    if (this._refDivs !== undefined) {
                        this._initRefs();
                    }
                });
        });
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
}
