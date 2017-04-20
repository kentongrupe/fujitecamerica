import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'elevators',
    templateUrl: 'elevators.component.html'
})
export class ElevatorsComponent extends BaseComponent {

    constructor() {
        super('ElevatorsComponent');
    }
}
