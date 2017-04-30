import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    SitePolicyComponent
} from './site-policy.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        SitePolicyComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        SitePolicyComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SitePolicyModule { }
