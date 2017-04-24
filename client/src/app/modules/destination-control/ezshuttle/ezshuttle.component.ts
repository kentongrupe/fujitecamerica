import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'ezshuttle',
    templateUrl: 'ezshuttle.component.html'
})
export class DestinationEZShuttleComponent extends BaseComponent {

    constructor() {
        super('DestinationEZShuttleComponent');
    }
}
