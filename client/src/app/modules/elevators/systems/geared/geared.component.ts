import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'geared',
    templateUrl: 'geared.component.html'
})
export class GearedComponent extends BaseComponent {

    constructor() {
        super('GearedComponent');
    }
}
