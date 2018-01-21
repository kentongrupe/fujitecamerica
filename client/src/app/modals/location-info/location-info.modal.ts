import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild
} from '@angular/core';
import {
    Modal
} from 'clarity-angular';
import 'slick-carousel/slick/slick';
import {
    BaseComponent
} from 'app/core';
import {
    Location
} from 'app/models';
import {
    StringService
} from 'app/services';

declare const $;

@Component({
    selector: 'location-info-modal',
    templateUrl: 'location-info.modal.html'
})
export class LocationInfoModal extends BaseComponent {

    @Output() public close: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('info') private _modal: Modal;

    private _location: Location = null;
    public get location(): Location {
        return this._location;
    }
    @Input() public set location(value: Location) {
        this._location = value;
        if (value && this._modal) {
            this._modal.open();
        }
    }

    constructor(
        private stringService: StringService
    ) {
        super('LocationInfoModal');
    }

    private _close(): void {
        this._modal.close();
        this.close.emit();
    }
    private _onClick(event: MouseEvent): void {
        if (event.target.className.includes('modal-backdrop')) {
            this._close();
        }
    }
}
