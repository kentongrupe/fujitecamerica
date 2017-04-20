import {
    OnInit
} from '@angular/core';
import {
    BaseClass
} from './BaseClass';

export class BaseComponent extends BaseClass implements OnInit {

    public enabled: boolean = true;

    public get disabled(): boolean {
        return !this.enabled;
    }

    constructor(className: string = 'BaseComponent') {
        super(className);
    }

    public ngOnInit() {
        return;
    }

    protected _preventDefault(event: MouseEvent): void {
        if (event !== undefined) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
}
