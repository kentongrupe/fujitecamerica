import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'autowalks',
    templateUrl: 'autowalks.component.html'
})
export class AutowalksComponent extends BaseComponent {

    constructor() {
        super('AutowalksComponent');
    }
}
