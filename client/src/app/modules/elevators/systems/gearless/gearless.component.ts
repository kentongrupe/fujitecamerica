import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'gearless',
    templateUrl: 'gearless.component.html'
})
export class GearlessComponent extends BaseComponent {

    constructor() {
        super('GearlessComponent');
    }
}
