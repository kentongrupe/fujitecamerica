import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    Router
} from '@angular/router';
import {
    BaseRouteComponent
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
export class SiteMapComponent extends BaseRouteComponent implements OnInit {

    private _siteMap: any[] = [];

    constructor(
        protected route: ActivatedRoute,
        protected router: Router,
        private routerService: RouterService,
        private stringService: StringService
    ) {
        super('SiteMapComponent', route, router);
        this._stringService = stringService;
    }

    public ngOnInit() {
        super.ngOnInit();

        // let sm = [];
        // sm.push('<?xml version="1.0" encoding="utf-8"?>');
        // sm.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">');

        let _parseRoute = (children) => {
            if (children === undefined) {
                return [];
            }
            return children.filter((c) => {
                return ((c !== undefined) && !this.isNullOrEmpty(c.path) && (c.path !== '**') && (c.path !== 'site-map'));
            }).map((c) => {
                let l = c.path.split('/').pop();
                let o = {
                    label: this._getString(l, l),
                    routerLink: c.path.substr(1),
                    children: _parseRoute(c.children)
                };

                // sm.push('<url><loc>http://www.fujitecamerica.com/{0}</loc></url>'.format(o.routerLink));

                return o;
            });
        };

        this._siteMap = _parseRoute(AppRoute.routes);

        // sm.push('</urlset>');
        // console.log(sm.join(''));
    }

    private _onClick(m: any): void {
        this.routerService.to(m.routerLink);
    }
}
