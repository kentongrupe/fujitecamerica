import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    PrivacyPolicyComponent
} from './privacy-policy.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        PrivacyPolicyComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        PrivacyPolicyComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PrivacyPolicyModule { }
