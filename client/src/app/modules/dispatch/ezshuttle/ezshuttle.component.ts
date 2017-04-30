import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'dispatch-ezshuttle',
    templateUrl: 'ezshuttle.component.html'
})
export class DispatchEZShuttleComponent extends BaseComponent {

    constructor() {
        super('DispatchEZShuttleComponent');
    }
}
