import {
    Component,
    ElementRef,
    ViewChild
} from '@angular/core';
import {
    DomSanitizer
} from '@angular/platform-browser';
import {
    ActivatedRoute,
    NavigationEnd,
    Router
} from '@angular/router';
import {
    BaseProductRouteComponent
} from 'app/core';
import {
    DataService,
    DOMService
} from 'app/services';

@Component({
    selector: 'autowalks',
    templateUrl: 'autowalks.component.html'
})
export class AutowalksComponent extends BaseProductRouteComponent {

    private _html: string = '';
    private _productUrl: string = '';

    constructor(
        private dataService: DataService,
        private domSanitizer: DomSanitizer,
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('AutowalksComponent', domService, route, router);
    }

    protected _onProduct(): void {
        let node = '';
        switch (this._product) {
            case 'gs8100':
                node = '65';
                break;
            default:
                break;
        }

        if (!this.isNullOrEmpty(node)) {
            // this.dataService.getHtml(node, (d) => {
            //     let parser = new DOMParser();
            //     let xmlDoc = parser.parseFromString(d, 'text/html');
            //     let n = xmlDoc.getElementById('node-{0}'.format(node)).innerHTML;

            //     this._html = this.domSanitizer.bypassSecurityTrustHtml(n) as string;
            // });
        }
    }
}
