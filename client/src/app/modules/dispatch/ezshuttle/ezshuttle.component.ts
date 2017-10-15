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
    selector: 'dispatch-ezshuttle',
    templateUrl: '/assets/locales/{0}/dispatch-ezshuttle-{0}.html'.format(StringService.locale)
})
export class DispatchEZShuttleComponent extends BaseComponent {

    constructor() {
        super('DispatchEZShuttleComponent');
    }
}
