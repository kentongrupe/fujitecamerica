import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    BaseNavRouteComponent
} from 'app/core';
import {
    AppRoute
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'site-map',
    templateUrl: 'site-map.component.html'
})
export class SiteMapComponent extends BaseNavRouteComponent implements OnInit {

    private _siteMap: any[] = [];

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        private stringService: StringService
    ) {
        super('SiteMapComponent', router, routerService);
        this._stringService = stringService;
    }

    public ngOnInit() {
        super.ngOnInit();

        let _parseRoute = (children) => {
            if (children === undefined) {
                return [];
            }
            return children.filter((c) => {
                return ((c !== undefined) && !this.isNullOrEmpty(c.path) && (c.path !== '**') && (c.path !== 'site-map'));
            }).map((c) => {
                let l = c.path.split('/').pop();
                return {
                    label: this._getString(l, l),
                    routerLink: c.path.substr(1),
                    children: _parseRoute(c.children)
                };
            });
        };

        this._siteMap = _parseRoute(AppRoute.routes);
    }

    private _onClick(m: any): void {
        this.routerService.to(m.routerLink);
    }
}
