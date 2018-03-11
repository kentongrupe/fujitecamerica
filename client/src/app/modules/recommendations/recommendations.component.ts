import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    BaseProductRouteComponent
} from 'app/core';
import {
    Testimonial
} from 'app/models';
import {
    DataService,
    DOMService,
    EventService,
    StringService
} from 'app/services';

@Component({
    selector: 'recommendations',
    templateUrl: 'recommendations.component.html'
})
export class RecommendationsComponent extends BaseProductRouteComponent implements OnInit {

    private _testimonials: Testimonial[] = [];

    constructor(
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router,
        private dataService: DataService,
        private stringService: StringService
    ) {
        super('RecommendationsComponent', domService, eventService, route, router);
        this._stringService = stringService;
    }

    public ngOnInit() {
        this.dataService.getTestimonials((d) => {
            if (this.hasValue(d.testimonials) && this.hasValue(d.testimonials[StringService.locale])) {
                this._testimonials = d.testimonials[StringService.locale].map((t) => {
                    return new Testimonial(t);
                });
            }
        });
    }
}
