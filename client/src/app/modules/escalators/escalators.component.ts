import {
    Component,
    ElementRef,
    OnInit,
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
    selector: 'escalators',
    templateUrl: '/assets/locales/{0}/escalators-{0}.html'.format(StringService.locale)
})
export class EscalatorsComponent extends BaseProductRouteComponent implements OnInit {

    @ViewChild('typef') public typef: ElementRef;
    @ViewChild('typep') public typep: ElementRef;
    @ViewChild('types') public types: ElementRef;

    constructor(
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('EscalatorsComponent', domService, eventService, route, router);
    }

    public ngOnInit() {
        this._products = [
            this.types,
            this.typef,
            this.typep
        ];

        super.ngOnInit();
    }
}
