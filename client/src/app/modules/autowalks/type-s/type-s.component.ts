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
    selector: 'autowalks-type-s',
    templateUrl: '/assets/locales/{0}/autowalks-types-{0}.html'.format(StringService.locale)
})
export class AutowalksTypeSComponent extends BaseComponent {

    private SectionType = SectionType;

    constructor() {
        super('AutowalksTypeSComponent');
    }
}
