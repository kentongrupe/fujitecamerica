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
    selector: 'elevators',
    templateUrl: '/assets/locales/{0}/elevators-{0}.html'.format(StringService.locale)
})
export class ElevatorsComponent extends BaseProductRouteComponent {

    @ViewChild('geared') public geared: ElementRef;
    @ViewChild('gearless') public gearless: ElementRef;
    @ViewChild('hydraulic') public hydraulic: ElementRef;
    @ViewChild('ionful') public ionful: ElementRef;
    @ViewChild('monitoring') public monitoring: ElementRef;
    @ViewChild('mrl') public mrl: ElementRef;

    constructor(
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('ElevatorsComponent', domService, eventService, route, router);
    }
}
