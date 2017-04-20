import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'architects',
    templateUrl: 'architects.component.html'
})
export class ArchitectsComponent extends BaseComponent {

    constructor() {
        super('ArchitectsComponent');
    }
}
