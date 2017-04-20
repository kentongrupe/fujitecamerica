import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'escalators',
    templateUrl: 'escalators.component.html'
})
export class EscalatorsComponent extends BaseComponent {

    constructor() {
        super('EscalatorsComponent');
    }
}
