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
    DOMService,
    EventService,
    StringService
} from 'app/services';

@Component({
    selector: 'installation',
    templateUrl: '/assets/locales/{0}/installation-{0}.html'.format(StringService.locale)
})
export class InstallationComponent extends BaseProductRouteComponent {

    @ViewChild('expectations') public expectations: ElementRef;
    @ViewChild('operations') public operations: ElementRef;

    constructor(
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('InstallationComponent', domService, eventService, route, router);
    }
}
