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
    selector: 'escalators',
    templateUrl: '/assets/locales/{0}/escalators-{0}.html'.format(StringService.locale)
})
export class EscalatorsComponent extends BaseNavRouteComponent {

    private SectionType = SectionType;

    constructor(
        protected router: Router,
        protected routerService: RouterService
    ) {
        super('EscalatorsComponent', router, routerService);
        this._scrollToContent = true;
    }
}
