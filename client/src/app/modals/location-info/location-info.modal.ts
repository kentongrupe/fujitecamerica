import {
    Component,
    Input
} from '@angular/core';
import 'slick-carousel/slick/slick';
import {
    BaseModal
} from 'app/core';
import {
    Location
} from 'app/models';

declare const $;

@Component({
    selector: 'location-info-modal',
    templateUrl: 'location-info.modal.html'
})
export class LocationInfoModal extends BaseModal {

    private _location: Location = null;
    public get location(): Location {
        return this._location;
    }
    @Input()
    public set location(value: Location) {
        this._location = value;
        if (value && this._modal) {
            this._modal.open();
        }
    }

    constructor() {
        super('LocationInfoModal');
    }
}
