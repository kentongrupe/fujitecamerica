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
    NavMenuDirection
} from 'app/models';
import {
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
    private _initComplete: boolean = false;
    private _intervalId: any = null;
    private _isHome: boolean = true;
    private _menuDirection: NavMenuDirection = NavMenuDirection.SIDE;
    private _references: any[] = [];

    constructor(
        private domService: DOMService,
        private eventService: EventService,
        private stringService: StringService,
        protected router: Router,
        protected routerService: RouterService,
    ) {
        super('AppComponent', router, routerService);
        this._stringService = stringService;

        eventService.register(AppEvent.INIT_COMPLETE, () => {
            this._initComplete = true;
            this.routerService.to(AppRoute.HOME);
        });
    }

    public ngOnInit() {
        this._references = [
            {
                source: 'T.C. - Dallas',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet consequat odio. Ut accumsan maximus turpis, ut vestibulum massa dictum vitae. Nunc vel dui et eros ornare lacinia. Pellentesque at purus ac purus elementum dapibus eget at est. Aliquam feugiat, turpis id tempor interdum, orci tortor posuere neque, et luctus metus lacus id orci. Sed imperdiet dui sit amet fermentum ornare.',
                mode: 0
            },
            {
                source: 'T.C. - Dallas',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet consequat odio. Ut accumsan maximus turpis, ut vestibulum massa dictum vitae. Nunc vel dui et eros ornare lacinia. Pellentesque at purus ac purus elementum dapibus eget at est. Aliquam feugiat, turpis id tempor interdum, orci tortor posuere neque, et luctus metus lacus id orci. Sed imperdiet dui sit amet fermentum ornare.',
                mode: 0
            },
            {
                source: 'T.C. - Dallas',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet consequat odio. Ut accumsan maximus turpis, ut vestibulum massa dictum vitae. Nunc vel dui et eros ornare lacinia. Pellentesque at purus ac purus elementum dapibus eget at est. Aliquam feugiat, turpis id tempor interdum, orci tortor posuere neque, et luctus metus lacus id orci. Sed imperdiet dui sit amet fermentum ornare.',
                mode: 0
            },
            {
                source: 'T.C. - Dallas',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet consequat odio. Ut accumsan maximus turpis, ut vestibulum massa dictum vitae. Nunc vel dui et eros ornare lacinia. Pellentesque at purus ac purus elementum dapibus eget at est. Aliquam feugiat, turpis id tempor interdum, orci tortor posuere neque, et luctus metus lacus id orci. Sed imperdiet dui sit amet fermentum ornare.',
                mode: 0
            },
            {
                source: 'T.C. - Dallas',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet consequat odio. Ut accumsan maximus turpis, ut vestibulum massa dictum vitae. Nunc vel dui et eros ornare lacinia. Pellentesque at purus ac purus elementum dapibus eget at est. Aliquam feugiat, turpis id tempor interdum, orci tortor posuere neque, et luctus metus lacus id orci. Sed imperdiet dui sit amet fermentum ornare.',
                mode: 0
            }
        ];

        setTimeout(() => {
            if (this._refDivs !== undefined) {
                this._initRefs();
            }
        });
    }

    protected _onNavigationEnd(event: NavigationEnd): void {
        super._onNavigationEnd(event);
        this._isHome = (event.url === AppRoute.HOME);
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
