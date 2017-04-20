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
    DOMService
} from 'app/services';

@Component({
    selector: 'installation',
    templateUrl: 'installation.component.html'
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
