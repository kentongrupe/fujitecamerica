import {
    OnInit
} from '@angular/core';
import {
    BaseClass
} from './BaseClass';
import {
    EventService,
    StringService
} from 'app/services';

export class BaseComponent extends BaseClass implements OnInit {

    public enabled: boolean = true;
    public locale: string = 'en';

    public get disabled(): boolean {
        return !this.enabled;
    }

    protected _eventIds: number[] = [];

    constructor(className: string = 'BaseComponent') {
        super(className);
        // this.locale = StringService.locale;
    }

    public ngOnInit() {
        return;
    }

    protected _preventDefault(event: MouseEvent): void {
        if ((event !== undefined) && (event !== null)) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    protected _unregisterEvents(eventService: EventService, names: string[]): void {
        if (this.hasValue(eventService)) {
            if (this._eventIds.length === names.length) {
                this._eventIds.forEach((id, i) => {
                    eventService.unregister(names[i], id);
                });
            }
        }
    }
}
