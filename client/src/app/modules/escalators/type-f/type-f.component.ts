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
    selector: 'escalators-type-f',
    templateUrl: '/assets/locales/{0}/escalators-typef-{0}.html'.format(StringService.locale)
})
export class EscalatorsTypeFComponent extends BaseComponent {

    private SectionType = SectionType;

    constructor() {
        super('EscalatorsTypeFComponent');
    }
}
