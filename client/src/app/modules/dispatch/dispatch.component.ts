import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    SectionType
} from 'app/models';

@Component({
    selector: 'dispatch',
    templateUrl: 'dispatch.component.html'
})
export class DispatchComponent extends BaseComponent {

    private SectionType = SectionType;

    constructor() {
        super('DispatchComponent');
    }
}
