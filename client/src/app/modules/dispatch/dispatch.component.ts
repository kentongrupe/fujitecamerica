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
    selector: 'dispatch',
    templateUrl: '/assets/locales/{0}/dispatch-{0}.html'.format(StringService.locale)
})
export class DispatchComponent extends BaseProductRouteComponent {

    @ViewChild('ezshuttle') public ezshuttle: ElementRef;
    @ViewChild('flexnx') public flexnx: ElementRef;

    constructor(
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('DispatchComponent', domService, eventService, route, router);
    }
}
