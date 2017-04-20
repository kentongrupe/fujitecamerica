
import {
    Component,
    ElementRef,
    ViewChild
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    BaseProductRouteComponent
} from 'app/core';
import {
    DOMService
} from 'app/services';

@Component({
    selector: 'service-maintenance',
    templateUrl: 'service-maintenance.component.html'
})
export class ServiceMaintenanceComponent extends BaseProductRouteComponent {

    @ViewChild('autowalks') public autowalks: ElementRef;
    @ViewChild('elevators') public elevators: ElementRef;
    @ViewChild('escalators') public escalators: ElementRef;
    @ViewChild('foreign') public foreign: ElementRef;

    constructor(
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('ServiceMaintenanceComponent', domService, route, router);
    }
}
