import {
    Component
} from '@angular/core';
import {
    AppRoute
} from 'app/models';

@Component({
    selector: 'login',
    styleUrls: ['./login.component.scss'],
    templateUrl: 'login.template.html'
})
export class LoginComponent {

    public password: string = '';
    public username: string = '';

    public login() {
        console.log(this.username, this.password);
    }
}
