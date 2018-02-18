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
    Leadership
} from 'app/models';
import {
    DataService,
    DOMService,
    EventService,
    StringService
} from 'app/services';

@Component({
    selector: 'about',
    templateUrl: '/assets/locales/{0}/about-{0}.html'.format(StringService.locale)
})
export class AboutComponent extends BaseProductRouteComponent implements OnInit {

    @ViewChild('message') public message: ElementRef;
    @ViewChild('about') public about: ElementRef;
    @ViewChild('leadership') public leadership: ElementRef;
    @ViewChild('history') public history: ElementRef;
    @ViewChild('mission') public mission: ElementRef;

    private _leaderships: Leadership[] = [];

    constructor(
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router,
        private dataService: DataService
    ) {
        super('AboutComponent', domService, eventService, route, router);
    }

    public ngOnInit() {
        super.ngOnInit();

        this.dataService.getLeaderships((d) => {
            this._leaderships = d.leaderships[StringService.locale].map((l) => {
                return new Leadership(l);
            });
        });
    }
}
