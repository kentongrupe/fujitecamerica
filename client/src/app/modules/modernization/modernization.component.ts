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
    SectionType
} from 'app/models';
import {
    DOMService,
    EventService,
    StringService
} from 'app/services';

@Component({
    selector: 'modernization',
    templateUrl: '/assets/locales/{0}/modernization-{0}.html'.format(StringService.locale)
})
export class ModernizationComponent extends BaseProductRouteComponent {

    private SectionType = SectionType;

    constructor(
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('ModernizationComponent', domService, eventService, route, router);
    }
}
