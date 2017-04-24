import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'mrl',
    templateUrl: 'mrl.component.html'
})
export class MRLComponent extends BaseComponent {

    constructor() {
        super('MRLComponent');
    }
}
