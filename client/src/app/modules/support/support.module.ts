import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules/_shared';
import {
    SupportComponent
} from './support.component';

@NgModule({
    declarations: [
        SupportComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        SupportComponent
    ],
    entryComponents: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]

})
export class SupportModule { }
