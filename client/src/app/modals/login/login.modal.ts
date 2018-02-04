import {
    Component
} from '@angular/core';
import {
    BaseModal
} from 'app/core';
import {
    User
} from 'app/models';
import {
    AuthenticationService,
    StringService
} from 'app/services';

@Component({
    selector: 'login',
    templateUrl: 'login.modal.html'
})
export class LoginModal extends BaseModal {

    public password: string = '';
    public username: string = '';

    private _errorMessage: string = '';
    private _showRegForm: boolean = false;

    private get _canLogin(): boolean {
        return (!this.isNullOrEmpty(this.username) && !this.isNullOrEmpty(this.password));
    }

    constructor(
        private authService: AuthenticationService,
        private stringService: StringService,
    ) {
        super('LoginModal');
        this._stringService = stringService;
    }

    protected _close(): void {
        super._close();

        this.username = '';
        this.password = '';
    }

    private _login(): void {
        if (this._canLogin) {
            this.authService.login(this.username, this.password, (user) => {
                // this._cancel(user);
            }, (e) => {
                this._errorMessage = e;
            });
        }
    }
    private _register(): void {
        // TODO: add registration code
        return;
    }
    private _cancelRegistration(): void {
        this._showRegForm = false;
    }
}
