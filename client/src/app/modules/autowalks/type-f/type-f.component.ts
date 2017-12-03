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
    selector: 'autowalks-type-f',
    templateUrl: '/assets/locales/{0}/autowalks-typef-{0}.html'.format(StringService.locale)
})
export class AutowalksTypeFComponent extends BaseComponent {

    private SectionType = SectionType;

    constructor() {
        super('AutowalksTypeFComponent');
    }
}
