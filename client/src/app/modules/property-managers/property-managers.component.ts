import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'property-managers',
    templateUrl: 'property-managers.component.html'
})
export class PropertyManagersComponent extends BaseComponent {

    constructor() {
        super('PropertyManagersComponent');
    }
}
