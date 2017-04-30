import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'privacy-policy',
    templateUrl: 'privacy-policy.component.html'
})
export class PrivacyPolicyComponent extends BaseComponent {

    constructor() {
        super('PrivacyPolicyComponent');
    }
}
