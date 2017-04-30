import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'dispatch',
    templateUrl: 'dispatch.component.html'
})
export class DispatchComponent extends BaseComponent {

    constructor() {
        super('DispatchComponent');
    }
}
