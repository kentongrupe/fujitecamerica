import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent extends BaseComponent {

    constructor() {
        super('ContactComponent');
    }
}
