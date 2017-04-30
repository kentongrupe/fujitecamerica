import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'site-policy',
    templateUrl: 'site-policy.component.html'
})
export class SitePolicyComponent extends BaseComponent {

    constructor() {
        super('SitePolicyComponent');
    }
}
