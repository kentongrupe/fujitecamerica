import {
    DomSanitizer
} from '@angular/platform-browser';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    DataService,
    DOMService,
    StringService
} from 'app/services';
import {
    BaseProductRouteComponent
} from './BaseProductRouteComponent';

export class BaseDynamicProductRouteComponent extends BaseProductRouteComponent {

    protected _html: string = '';
    protected _selector: string = '';

    constructor(
        className: string = 'BaseDynamicProductRouteComponent',
        protected dataService: DataService,
        protected domSanitizer: DomSanitizer,
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router,
        protected stringService: StringService
    ) {
        super(className, domService, route, router);
    }

    protected _onProduct(): void {
        if (!this.isNullOrEmpty(this._product)) {
            let url = 'assets/locales/{0}/{1}-{2}-{0}.html'.format(StringService.locale, this._selector, this._product);
            this.dataService.getHtml(url, (d) => {
                let parser = new DOMParser();
                let xmlDoc = parser.parseFromString(d, 'text/html');
                this._html = this.domSanitizer.bypassSecurityTrustHtml(xmlDoc.body.innerHTML) as string;
            });
        }
    }
}