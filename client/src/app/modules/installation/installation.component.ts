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
    StringService
} from 'app/services';

@Component({
    selector: 'installation',
    templateUrl: '/assets/locales/{0}/installation-{0}.html'.format(StringService.locale)
})
export class InstallationComponent extends BaseProductRouteComponent {

    @ViewChild('autowalks') public autowalks: ElementRef;
    @ViewChild('elevators') public elevators: ElementRef;
    @ViewChild('escalators') public escalators: ElementRef;

    constructor(
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('InstallationComponent', domService, route, router);
    }
}
