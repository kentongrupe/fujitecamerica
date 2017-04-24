import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'systems',
    templateUrl: 'systems.component.html'
})
export class SystemsComponent extends BaseComponent {

    constructor() {
        super('SystemsComponent');
    }
}
