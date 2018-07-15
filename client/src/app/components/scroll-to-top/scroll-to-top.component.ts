import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    AppEvent
} from 'app/models/AppEvent';
import {
    EventService
} from 'app/services';

@Component({
    selector: 'scroll-to-top',
    templateUrl: 'scroll-to-top.component.html'
})
export class ScrollToTopComponent extends BaseComponent {

    @Input()
    public topRoute: string = '';
    @Output()
    public scrollToTop: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private eventService: EventService
    ) {
        super('ScrollToTopComponent');
    }

    private _onClick(): void {
        this.eventService.dispatch(AppEvent.SCROLL_TO_TOP, this.topRoute);
    }
}
