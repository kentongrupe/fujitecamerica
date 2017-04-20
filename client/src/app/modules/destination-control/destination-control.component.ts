import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'destination-control',
    templateUrl: 'destination-control.component.html'
})
export class DestinationControlComponent extends BaseComponent {

    constructor() {
        super('DestinationControlComponent');
    }
}
