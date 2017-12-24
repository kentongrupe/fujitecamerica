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
    SectionType
} from 'app/models';
import {
    DOMService,
    StringService
} from 'app/services';

@Component({
    selector: 'autowalks',
    templateUrl: '/assets/locales/{0}/autowalks-{0}.html'.format(StringService.locale)
})
export class AutowalksComponent extends BaseProductRouteComponent {

    @ViewChild('gs8100') public gs8100: ElementRef;
    @ViewChild('typef') public typef: ElementRef;
    @ViewChild('typep') public typep: ElementRef;
    @ViewChild('types') public types: ElementRef;

    private SectionType = SectionType;

    constructor(
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('AutowalksComponent', domService, route, router);
    }
}
