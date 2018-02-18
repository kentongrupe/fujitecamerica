import {
    Component,
    DoCheck
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    SectionType
} from 'app/models';
import {
    StringService
} from 'app/services';

@Component({
    selector: 'support',
    templateUrl: '/assets/locales/{0}/support-{0}.html'.format(StringService.locale)
})
export class SupportComponent extends BaseComponent implements DoCheck {

    private _canSubmit: boolean = false;
    private _company: string = '';
    private _description: string = '';
    private _email: string = '';
    private _emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    private _name: string = '';
    private _phone: string = '';

    private SectionType = SectionType;

    constructor(
        private stringService: StringService
    ) {
        super('SupportComponent');
        this._stringService = stringService;
    }

    public ngDoCheck() {
        this._canSubmit = !this.isNullOrEmpty(this._name) && !this.isNullOrEmpty(this._company)
            && !this.isNullOrEmpty(this._email) && !this.isNullOrEmpty(this._phone)
            && !this.isNullOrEmpty(this._description);
    }

    private _submit(): void {
        // TODO
    }
}
