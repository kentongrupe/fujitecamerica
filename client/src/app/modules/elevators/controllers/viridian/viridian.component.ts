import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'viridian',
    templateUrl: 'viridian.component.html'
})
export class ViridianComponent extends BaseComponent {

    constructor() {
        super('ViridianComponent');
    }
}
