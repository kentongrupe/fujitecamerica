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
    selector: 'geared',
    templateUrl: '/assets/locales/{0}/elevators-systems-geared-{0}.html'.format(StringService.locale)
})
export class GearedComponent extends BaseComponent {

    constructor() {
        super('GearedComponent');
    }
}
