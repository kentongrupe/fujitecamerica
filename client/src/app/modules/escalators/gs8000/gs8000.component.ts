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
    selector: 'escalators-gs8000',
    templateUrl: '/assets/locales/{0}/escalators-gs8000-{0}.html'.format(StringService.locale)
})
export class EscalatorsGS8000Component extends BaseComponent {

    private SectionType = SectionType;

    constructor() {
        super('EscalatorsGS8000Component');
    }
}
