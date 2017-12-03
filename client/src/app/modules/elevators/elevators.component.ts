import {
    Component
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
    SectionType
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'elevators',
    templateUrl: '/assets/locales/{0}/elevators-{0}.html'.format(StringService.locale)
})
export class ElevatorsComponent extends BaseNavRouteComponent {

    private SectionType = SectionType;

    constructor(
        protected router: Router,
        protected routerService: RouterService
    ) {
        super('ElevatorsComponent', router, routerService);
        this._scrollToContent = true;
    }
}
