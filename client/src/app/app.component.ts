import {
    Component
} from '@angular/core';
import {
    AppEvent,
    AppRoute
} from 'app/models';
import {
    EventService,
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'app',
    templateUrl: `app.component.html`
})
export class AppComponent {

    private _initComplete: boolean = false;

    constructor(
        private eventService: EventService,
        private routerService: RouterService,
        private stringService: StringService
    ) {
        eventService.register(AppEvent.INIT_COMPLETE, () => {
            this._initComplete = true;
            this.routerService.to(AppRoute.HOME);
        });
    }

    private _exportStrings(): void {
        this.stringService.export();
    }
}
