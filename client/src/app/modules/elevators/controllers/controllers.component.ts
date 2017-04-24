import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'controllers',
    templateUrl: 'controllers.component.html'
})
export class ControllersComponent extends BaseComponent {

    constructor() {
        super('ControllersComponent');
    }
}
