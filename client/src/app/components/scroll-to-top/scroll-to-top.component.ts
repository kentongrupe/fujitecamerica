import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'scroll-to-top',
    templateUrl: 'scroll-to-top.component.html'
})
export class ScrollToTopComponent extends BaseComponent implements OnInit {

    constructor(
    ) {
        super('ScrollToTopComponent');
    }

    public ngOnInit() {
        super.ngOnInit();

    }
}
