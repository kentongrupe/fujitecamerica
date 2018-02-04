import {
    EventEmitter,
    Output,
    ViewChild
} from '@angular/core';
import {
    BaseComponent
} from './BaseComponent';
import {
    Modal
} from 'clarity-angular';

export class BaseModal extends BaseComponent {

    @Output()
    public close: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('modal')
    protected _modal: Modal;

    constructor(className: string = 'BaseModal') {
        super(className);
    }

    public show(): void {
        this._modal.open();
    }

    protected _close(): void {
        this._modal.close();
        this.close.emit();
    }
    protected _onClick(event: MouseEvent): void {
        if (event.target.className.includes('modal-backdrop')) {
            this._close();
        }
    }
}
