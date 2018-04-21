import {
    Component,
    DoCheck,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    BaseProductRouteComponent
} from 'app/core';
import {
    SectionType
} from 'app/models';
import {
    DataService,
    DOMService,
    EventService,
    StringService,
} from 'app/services';

@Component({
    selector: 'support',
    templateUrl: '/assets/locales/{0}/support-{0}.html'.format(StringService.locale)
})
export class SupportComponent extends BaseProductRouteComponent implements DoCheck, OnInit {

    private _canSubmit: boolean = false;
    private _company: string = '';
    private _description: string = '';
    private _email: string = '';
    private _emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    private _name: string = '';
    private _phone: string = '';

    private SectionType = SectionType;

    constructor(
        protected domService: DOMService,
        protected eventService: EventService,
        protected route: ActivatedRoute,
        protected router: Router,
        private dataService: DataService,
        private stringService: StringService
    ) {
        super('SupportComponent', domService, eventService, route, router);
        this._stringService = stringService;
    }

    public ngDoCheck() {
        this._canSubmit = !this.isNullOrEmpty(this._name) && !this.isNullOrEmpty(this._company)
            && !this.isNullOrEmpty(this._email) && !this.isNullOrEmpty(this._phone)
            && !this.isNullOrEmpty(this._description);
    }
    public ngOnInit() {
        this._init();
    }

    private _init(): void {
        this.enabled = true;

        this._company = '';
        this._description = '';
        this._email = '';
        this._name = '';
        this._phone = '';
    }
    private _submit(): void {
        this.enabled = false;

        let params = {
            name: this._name,
            company: this._company,
            email: this._email,
            phone: this._phone,
            description: this._description
        };
        this.dataService.sendSupport(params, (d) => {
            this._init();
            alert(this._getString('support-submit-text', 'Your request has been submitted. One of our representatives will contact you soon.'));
        });
    }
}
