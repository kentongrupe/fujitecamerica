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
    selector: 'viridian',
    templateUrl: '/assets/locales/{0}/elevators-controllers-viridian-{0}.html'.format(StringService.locale)
})
export class ViridianComponent extends BaseComponent {

    constructor() {
        super('ViridianComponent');
    }
}
