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
    selector: 'gearless',
    templateUrl: '/assets/locales/{0}/elevators-systems-gearless-{0}.html'.format(StringService.locale)
})
export class GearlessComponent extends BaseComponent {

    constructor() {
        super('GearlessComponent');
    }
}
