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
    SectionType
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'dispatch',
    templateUrl: '/assets/locales/{0}/dispatch-{0}.html'.format(StringService.locale)
})
export class DispatchComponent extends BaseNavRouteComponent {

    private SectionType = SectionType;

    constructor(
        protected router: Router,
        protected routerService: RouterService
    ) {
        super('DispatchComponent', router, routerService);
        this._scrollToContent = true;
    }
}
