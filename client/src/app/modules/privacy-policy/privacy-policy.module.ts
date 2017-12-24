import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules/_shared';
import {
    PrivacyPolicyComponent
} from './privacy-policy.component';

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
    schemas: [
        NO_ERRORS_SCHEMA
    ]

})
export class PrivacyPolicyModule { }
