import {
    Component
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'about',
    templateUrl: 'about.component.html'
})
export class AboutComponent extends BaseComponent {

    constructor() {
        super('AboutComponent');
    }
}
