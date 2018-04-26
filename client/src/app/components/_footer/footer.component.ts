import {
    Component,
    OnInit
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    AppRoute,
    MenuItem
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})
export class AppFooterComponent extends BaseComponent implements OnInit {

    private _copyright: number = (new Date()).getFullYear();
    private _menu: MenuItem[] = [];

    constructor(
        private routerService: RouterService,
        private stringService: StringService
    ) {
        super('AppFooterComponent');
        this._stringService = stringService;
    }

    public ngOnInit() {
        super.ngOnInit();

        this._menu = [
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

    public onMenuClick(item: MenuItem, event?: MouseEvent): void {
        this._preventDefault(event);
        if (!this.isNullOrEmpty(item.routerLink)) {
            this.routerService.to(item.routerLink);
        } else if (item.command !== undefined) {
            item.command();
        }
    }
}
