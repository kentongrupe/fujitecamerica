
import {
    Component,
    ElementRef,
    OnInit,
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
    DOMService,
    EventService,
    StringService
} from 'app/services';

@Component({
    selector: 'service-maintenance',
    templateUrl: '/assets/locales/{0}/service-maintenance-{0}.html'.format(StringService.locale)
})
export class ServiceMaintenanceComponent extends BaseProductRouteComponent implements OnInit {

    @ViewChild('stats') public stats: ElementRef;
    @ViewChild('whyfujitec') public whyfujitec: ElementRef;
    @ViewChild('routes') public routes: ElementRef;

    constructor(
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('ServiceMaintenanceComponent', domService, eventService, route, router);
    }

    public ngOnInit() {
        this._products = [
            this.stats,
            this.whyfujitec,
            this.routes
        ];

        super.ngOnInit();
    }
}
