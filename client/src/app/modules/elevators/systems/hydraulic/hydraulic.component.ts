import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'hydraulic',
    templateUrl: 'hydraulic.component.html'
})
export class HydraulicComponent extends BaseComponent {

    constructor() {
        super('HydraulicComponent');
    }
}
