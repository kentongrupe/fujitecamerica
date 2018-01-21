import {
    Component,
    DoCheck
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    StringService
} from 'app/services';

@Component({
    selector: 'contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent extends BaseComponent implements DoCheck {

    private _address: string = '';
    private _canSubmit: boolean = false;
    private _description: string = '';
    private _email: string = '';
    private _emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    private _firstName: string = '';
    private _fujitec: string = '';
    private _lastName: string = '';
    private _phone: string = '';

    constructor(
        private stringService: StringService
    ) {
        super('ContactComponent');
        this._stringService = stringService;
    }

    public ngDoCheck() {
        this._canSubmit = !this.isNullOrEmpty(this._firstName) && !this.isNullOrEmpty(this._lastName)
            && !this.isNullOrEmpty(this._email) && this._emailRegex.test(this._email)
            && !this.isNullOrEmpty(this._phone) && !this.isNullOrEmpty(this._fujitec)
            && !this.isNullOrEmpty(this._description);
    }

    private _submit(): void {
        // TODO
    }
}
