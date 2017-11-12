import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    SectionType
} from 'app/models';
import {
    StringService
} from 'app/services';

@Component({
    selector: 'ionful',
    templateUrl: '/assets/locales/{0}/elevators-ionful-{0}.html'.format(StringService.locale)
})
export class IONFULComponent extends BaseComponent {

    private SectionType = SectionType;

    constructor() {
        super('IONFULComponent');
    }
}
