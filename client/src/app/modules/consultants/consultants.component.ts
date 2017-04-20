import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'consultants',
    templateUrl: 'consultants.component.html'
})
export class ConsultantsComponent extends BaseComponent {

    constructor() {
        super('ConsultantsComponent');
    }
}
