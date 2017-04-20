import {
    Component
} from '@angular/core';
import {
    MdDialogRef
} from '@angular/material';
import {
    BaseComponent
} from 'app/core';

@Component({
    selector: 'login',
    templateUrl: 'login.modal.html'
})
export class LoginModal {

    public password: string = '';
    public username: string = '';

    constructor(public loginModal: MdDialogRef<LoginModal>) { }
}
