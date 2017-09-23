import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    StringService
} from 'app/services';

@Component({
    selector: 'dispatch-flex-nx',
    templateUrl: '/assets/locales/{0}/dispatch-flex-nx-{0}.html'.format(StringService.locale)
})
export class DispatchFlexNXComponent extends BaseComponent {

    constructor() {
        super('DispatchFlexNXComponent');
    }
}
