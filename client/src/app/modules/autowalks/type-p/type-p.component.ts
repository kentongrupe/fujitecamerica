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
    selector: 'autowalks-type-p',
    templateUrl: '/assets/locales/{0}/autowalks-typep-{0}.html'.format(StringService.locale)
})
export class AutowalksTypePComponent extends BaseComponent {

    private SectionType = SectionType;

    constructor() {
        super('AutowalksTypePComponent');
    }
}
