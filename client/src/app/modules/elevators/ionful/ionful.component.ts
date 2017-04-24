import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'ionful',
    templateUrl: 'ionful.component.html'
})
export class IONFULComponent extends BaseComponent {

    constructor() {
        super('IONFULComponent');
    }
}
