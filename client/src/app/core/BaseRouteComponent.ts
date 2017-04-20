import {
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    Router
} from '@angular/router';
import {
    BaseComponent
} from 'app/core';

export class BaseRouteComponent extends BaseComponent implements OnInit {

    private _activeItem: any;
    private _params: Map<string, string>;
    private _route: ActivatedRoute;

    constructor(
        className: string = 'BaseRouteComponent',
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super(className);

        this._params = new Map<string, string>();
        this._route = route;

        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this._onNavigationEnd(event as NavigationEnd);
            }
        });
    }

    public ngOnInit() {
        this._onNavigationEnd(null);
    }
    protected _getParam(name: string): string {
        if (this._params.has(name)) {
            return this._params.get(name);
        }
        return null;
    }
    protected _onNavigationEnd(event: NavigationEnd): void {
        let params = this.route.params['value'];
        for (let p in params) {
            if (params[p] !== undefined) {
                this._params.set(p, params[p]);
            }
        }
    }
}
