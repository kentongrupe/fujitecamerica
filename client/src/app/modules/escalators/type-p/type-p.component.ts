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
    selector: 'escalators-type-p',
    templateUrl: '/assets/locales/{0}/escalators-typep-{0}.html'.format(StringService.locale)
})
export class EscalatorsTypePComponent extends BaseComponent {

    private SectionType = SectionType;

    constructor() {
        super('EscalatorsTypePComponent');
    }
}
