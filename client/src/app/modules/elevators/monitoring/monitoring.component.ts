import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'monitoring',
    templateUrl: 'monitoring.component.html'
})
export class MonitoringComponent extends BaseComponent {

    constructor() {
        super('MonitoringComponent');
    }
}
