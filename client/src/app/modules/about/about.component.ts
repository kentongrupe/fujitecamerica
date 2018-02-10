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
    selector: 'about',
    templateUrl: '/assets/locales/{0}/about-{0}.html'.format(StringService.locale)
})
export class AboutComponent extends BaseProductRouteComponent {

    @ViewChild('message') public message: ElementRef;
    @ViewChild('about') public about: ElementRef;
    @ViewChild('leadership') public leadership: ElementRef;
    @ViewChild('history') public history: ElementRef;
    @ViewChild('mission') public mission: ElementRef;

    constructor(
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router,
    ) {
        super('AboutComponent', domService, eventService, route, router);
    }
}
