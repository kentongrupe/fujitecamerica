import {
    OnDestroy,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    Router
} from '@angular/router';
import {
    Subscription
} from 'rxjs';
import {
    BaseComponent
} from './BaseComponent';

export class BaseRouteComponent extends BaseComponent implements OnDestroy, OnInit {

    private _activeItem: any;
    private _params: Map<string, string>;
    private _route: ActivatedRoute;
    private _subscription: Subscription;

    constructor(
        className: string = 'BaseRouteComponent',
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super(className);

        this._params = new Map<string, string>();
        this._route = route;

        this._subscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this._onNavigationEnd(event as NavigationEnd);
            }
        });
    }

    public ngOnDestroy() {
        this._subscription.unsubscribe();
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
        if (params !== null) {
            Object.keys(params).forEach((key) => {
                let value = params[key];
                this._params.set(key, value);
            });
        }
    }
}
