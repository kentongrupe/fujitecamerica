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
    selector: 'mrl',
    templateUrl: '/assets/locales/{0}/elevators-systems-mrl-{0}.html'.format(StringService.locale)
})
export class MRLComponent extends BaseComponent {

    constructor() {
        super('MRLComponent');
    }
}
