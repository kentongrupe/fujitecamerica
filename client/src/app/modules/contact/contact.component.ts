import {
    Component,
    DoCheck,
    OnInit
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    DataService,
    StringService
} from 'app/services';

@Component({
    selector: 'contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent extends BaseComponent implements DoCheck, OnInit {

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
        private dataService: DataService,
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
    public ngOnInit() {
        this._init();
    }

    private _init(): void {
        this.enabled = true;

        this._address = '';
        this._description = '';
        this._email = '';
        this._firstName = '';
        this._fujitec = '';
        this._lastName = '';
        this._phone = '';
    }
    private _submit(): void {
        this.enabled = false;

        let params = {
            address: this.isNullOrEmpty(this._address) ? '' : this._address,
            name: '{0} {1}'.format(this._firstName, this._lastName),
            email: this._email,
            phone: this._phone,
            facility: this._fujitec,
            description: this._description
        };
        this.dataService.sendContact(params, (d) => {
            this._init();
            alert(this._getString('contact-submit-text', 'Your request has been submitted. One of our representatives will contact you soon.'));
        });
    }
}
