import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'dispatch-flex-nx',
    templateUrl: 'flex-nx.component.html'
})
export class DispatchFlexNXComponent extends BaseComponent {

    constructor() {
        super('DispatchFlexNXComponent');
    }
}
