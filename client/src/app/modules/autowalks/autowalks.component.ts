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
    selector: 'autowalks',
    templateUrl: '/assets/locales/{0}/autowalks-{0}.html'.format(StringService.locale)
})
export class AutowalksComponent extends BaseNavRouteComponent {

    private SectionType = SectionType;

    constructor(
        protected router: Router,
        protected routerService: RouterService
    ) {
        super('AutowalksComponent', router, routerService);
        this._scrollToContent = true;
    }
}
