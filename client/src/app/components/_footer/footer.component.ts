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
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})
export class AppFooterComponent extends BaseNavRouteComponent implements OnInit {

    private _copyright: number = (new Date()).getFullYear();

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        private stringService: StringService
    ) {
        super('AppFooterComponent', router, routerService);
        this._stringService = stringService;
    }

    public ngOnInit() {
        super.ngOnInit();

        this.menu = [
            {
                label: this._getString('site-map', 'Site Map'),
                routerLink: AppRoute.SITE_MAP
            },
            {
                label: this._getString('privacy-policy', 'Privacy Policy'),
                routerLink: AppRoute.PRIVACY_POLICY
            },
            {
                label: this._getString('site-policy', 'Site Policy'),
                routerLink: AppRoute.SITE_POLICY
            }
        ];
    }
}
