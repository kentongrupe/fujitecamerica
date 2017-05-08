import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    NavMenuComponent
} from './nav-menu.component';
import {
    AppRoute,
    MenuItem
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'pro-menu',
    templateUrl: 'nav-menu.component.html'
})
export class ProMenuComponent extends NavMenuComponent implements OnInit {

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        protected stringService: StringService
    ) {
        super(router, routerService, stringService);
        this._setClassName('ProMenuComponent');
    }

    public ngOnInit() {
        super.ngOnInit();

        this.menu = [
            {
                label: this._getString('consultants', 'Consultants'),
                icon: 'consultants',
                routerLink: AppRoute.CONSULTANTS
            },
            {
                label: this._getString('property-management-cos', 'Property Management Cos'),
                icon: 'property-managers',
                routerLink: AppRoute.PROPERTY_MANAGERS
            },
            {
                label: this._getString('architects-gcs', 'Architects & GCs'),
                icon: 'architects',
                routerLink: AppRoute.ARCHITECTS
            }
        ];
    }
}
