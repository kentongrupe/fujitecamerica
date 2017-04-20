import {
    NgModule
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules/shared';
import {
    LoginComponent
} from './';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        LoginComponent
    ]
})
export class LoginModule { }
