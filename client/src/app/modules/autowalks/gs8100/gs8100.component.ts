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
    selector: 'autowalks-gs8100',
    templateUrl: '/assets/locales/{0}/autowalks-gs8100-{0}.html'.format(StringService.locale)
})
export class AutowalksGS8100Component extends BaseComponent {

    private SectionType = SectionType;

    constructor() {
        super('AutowalksGS8100Component');
    }
}
