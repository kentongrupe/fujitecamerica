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
    AppRoute,
    MenuItem
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseNavRouteComponent implements OnInit {

    private _proMenu: MenuItem[] = [];
    private _sysMenu: MenuItem[] = [];

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        private stringService: StringService
    ) {
        super('HomeComponent', router, routerService);
        this._stringService = stringService;
    }

    public ngOnInit() {
        this._sysMenu = [
            {
                label: this._getString('elevators', 'Elevators'),
                routerLink: AppRoute.ELEVATORS
            },
            {
                label: this._getString('escalators', 'Escalators'),
                routerLink: AppRoute.ESCALATORS
            },
            {
                label: this._getString('ezshuttle-dispatch', 'EZShuttle Dispatch')
            },
            {
                label: this._getString('autowalks', 'Autowalks'),
                routerLink: AppRoute.AUTOWALKS
            }
        ];
        this._proMenu = [
            {
                label: this._getString('consultants', 'Consultants'),
                routerLink: AppRoute.CONSULTANTS
            },
            {
                label: this._getString('property-management-cos', 'Property Management Cos'),
                routerLink: AppRoute.PROPERTY_MANAGERS
            },
            {
                label: this._getString('architects-gcs', 'Architects & GCs'),
                routerLink: AppRoute.ARCHITECTS
            }
        ];
    }
}
