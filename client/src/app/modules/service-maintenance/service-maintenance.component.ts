
import {
    Component
    // ElementRef,
    // ViewChild
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    BaseProductRouteComponent
} from 'app/core';
import {
    SectionType
} from 'app/models';
import {
    DOMService,
    StringService
} from 'app/services';

@Component({
    selector: 'service-maintenance',
    templateUrl: '/assets/locales/{0}/service-maintenance-{0}.html'.format(StringService.locale)
})
export class ServiceMaintenanceComponent extends BaseProductRouteComponent {

    // @ViewChild('autowalks') public autowalks: ElementRef;
    // @ViewChild('elevators') public elevators: ElementRef;
    // @ViewChild('escalators') public escalators: ElementRef;
    // @ViewChild('foreign') public foreign: ElementRef;

    SectionType = SectionType;

    constructor(
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('ServiceMaintenanceComponent', domService, route, router);
    }
}
