import {
    Component,
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
    AppEvent,
    AppRoute,
    NavMenuDirection
} from 'app/models';
import {
    EventService,
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'app',
    templateUrl: `app.component.html`
})
export class AppComponent extends BaseNavRouteComponent implements OnInit {

    private _initComplete: boolean = false;
    private _isHome: boolean = true;
    private _menuDirection: NavMenuDirection = NavMenuDirection.SIDE;

    constructor(
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
        return;
    }

    protected _onNavigationEnd(event: NavigationEnd): void {
        super._onNavigationEnd(event);
        this._isHome = (event.url === AppRoute.HOME);
    }
    private _exportStrings(): void {
        this.stringService.export();
    }
}
