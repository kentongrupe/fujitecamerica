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
    RouterService
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
        private routerService: RouterService
    ) {
        super('ScrollToTopComponent');
    }

    private _onClick(): void {
        if (!this.isNullOrEmpty(this.topRoute)) {
            if (this.routerService.to(this.topRoute) === false) {
                this.scrollToTop.emit(this.topRoute);
            }
        }
    }
}
