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
    DataService,
    DOMService,
    StringService
} from 'app/services';

@Component({
    selector: 'escalators',
    templateUrl: 'escalators.component.html'
})
export class EscalatorsComponent extends BaseDynamicProductRouteComponent {

    constructor(
        protected dataService: DataService,
        protected domSanitizer: DomSanitizer,
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router,
        protected stringService: StringService
    ) {
        super('EscalatorsComponent', dataService, domSanitizer, domService, route, router, stringService);

        this._selector = 'escalators';
    }
}
