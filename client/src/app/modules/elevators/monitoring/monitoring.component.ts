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
    selector: 'monitoring',
    templateUrl: '/assets/locales/{0}/elevators-monitoring-{0}.html'.format(StringService.locale)
})
export class MonitoringComponent extends BaseComponent {

    private SectionType = SectionType;

    constructor() {
        super('MonitoringComponent');
    }
}
