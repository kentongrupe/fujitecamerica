import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'flex-nx',
    templateUrl: 'flex-nx.component.html'
})
export class ElevatorFlexNXComponent extends BaseComponent {

    constructor() {
        super('ElevatorFlexNXComponent');
    }
}
