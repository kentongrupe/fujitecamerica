import {
    OnInit
} from '@angular/core';
import {
    BaseClass
} from './BaseClass';
import {
    StringService
} from 'app/services';

export class BaseComponent extends BaseClass implements OnInit {

    public enabled: boolean = true;
    public locale: string = 'en';

    public get disabled(): boolean {
        return !this.enabled;
    }

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
}
