import {
    Component
} from '@angular/core';
import {
    MdDialogRef
} from '@angular/material';
import {
    BaseModal
} from 'app/core';
import {
    AuthenticationService
} from 'app/services';

@Component({
    selector: 'login',
    templateUrl: 'login.modal.html'
})
export class LoginModal extends BaseModal {

    public password: string = '';
    public username: string = '';

    constructor(
        public loginModal: MdDialogRef<LoginModal>,
        private authService: AuthenticationService
    ) {
        super('LoginModal');
    }

    private _cancel(): void {
        this.username = '';
        this.password = '';
        this.loginModal.close();
    }
    private _login(): void {
        if (!this.isNullOrEmpty(this.username) && !this.isNullOrEmpty(this.password)) {
            this.authService.login(this.username, this.password, (user) => {
                this._cancel();
            });
        }
    }
}
