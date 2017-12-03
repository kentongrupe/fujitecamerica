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
    selector: 'escalators-type-s',
    templateUrl: '/assets/locales/{0}/escalators-types-{0}.html'.format(StringService.locale)
})
export class EscalatorsTypeSComponent extends BaseComponent {

    private SectionType = SectionType;

    constructor() {
        super('EscalatorsTypeSComponent');
    }
}
