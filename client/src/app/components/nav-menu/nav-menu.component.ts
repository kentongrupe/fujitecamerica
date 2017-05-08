import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    BaseNavRouteComponent
} from 'app/core';
import {
    AppRoute,
    MenuItem,
    NavMenuDirection
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'nav-menu',
    templateUrl: 'nav-menu.component.html'
})
export class NavMenuComponent extends BaseNavRouteComponent implements OnInit {

    @Input() public direction: NavMenuDirection = NavMenuDirection.DEFAULT;

    private get _menuDirection(): string {
        return NavMenuDirection[this.direction].toLowerCase();
    }

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        protected stringService: StringService
    ) {
        super('NavMenuComponent', router, routerService);
        this._stringService = stringService;
    }

    public ngOnInit() {
        super.ngOnInit();
    }

    protected _onMenuClick(item: MenuItem, event: MouseEvent | MenuItem): void {
        if (item === null) {
            item = event as MenuItem;
        }

        this.menu.forEach((m) => {
            m.expanded = false;
            if (m.items) {
                m.items.forEach((mm) => {
                    mm.expanded = false;
                });
            }
        });

        this.routerService.to(item.routerLink);
    }
}
