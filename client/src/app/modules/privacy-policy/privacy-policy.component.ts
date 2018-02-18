import {
    Component
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
    selector: 'privacy-policy',
    templateUrl: '/assets/locales/{0}/privacy-policy-{0}.html'.format(StringService.locale)
})
export class PrivacyPolicyComponent extends BaseProductRouteComponent {

    constructor(
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router,
        private stringService: StringService
    ) {
        super('PrivacyPolicyComponent', domService, eventService, route, router);
    }
}
