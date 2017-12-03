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
    selector: 'hydraulic',
    templateUrl: '/assets/locales/{0}/elevators-systems-hydraulic-{0}.html'.format(StringService.locale)
})
export class HydraulicComponent extends BaseComponent {

    constructor() {
        super('HydraulicComponent');
    }
}
