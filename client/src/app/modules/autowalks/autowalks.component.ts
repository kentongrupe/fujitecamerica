import {
    Component
} from '@angular/core';
import {
    DomSanitizer
} from '@angular/platform-browser';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    BaseDynamicProductRouteComponent
} from 'app/core';
import {
    SectionType
} from 'app/models';
import {
    DataService,
    DOMService,
    StringService
} from 'app/services';

@Component({
    selector: 'autowalks',
    templateUrl: 'autowalks.component.html'
})
export class AutowalksComponent extends BaseDynamicProductRouteComponent {

    private SectionType = SectionType;

    constructor(
        protected dataService: DataService,
        protected domSanitizer: DomSanitizer,
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router,
        protected stringService: StringService
    ) {
        super('AutowalksComponent', dataService, domSanitizer, domService, route, router, stringService);

        this._selector = 'autowalks';
    }
}
