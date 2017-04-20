import {
    Component,
    OnInit
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    StringService
} from 'app/services';

@Component({
    selector: 'site-map',
    templateUrl: 'site-map.component.html'
})
export class SiteMapComponent extends BaseComponent implements OnInit {

    public siteMap: any[] = [];

    constructor(
        private stringService: StringService
    ) {
        super('SiteMapComponent');
        this._stringService = stringService;
    }

    public ngOnInit() {
        super.ngOnInit();

        let _parseRoute = (children) => {
            if (children === undefined) {
                return [];
            }
            return children.filter((c) => {
                return ((c !== undefined) && !this.isNullOrEmpty(c.path) && (c.path !== '**') && (c.path !== 'site-map'));
            }).map((c) => {
                return {
                    label: (c.data) ? this._getString(c.data.stringId) : '',
                    url: (c.data) ? c.data.url : '',
                    children: _parseRoute(c.children)
                };
            });
        };

        // this.siteMap = _parseRoute(ROUTES);
    }
}
