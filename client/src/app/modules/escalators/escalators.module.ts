import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules/_shared';
import {
    EscalatorsComponent
} from './escalators.component';

@NgModule({
    declarations: [
        EscalatorsComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        EscalatorsComponent
    ],
    entryComponents: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EscalatorsModule { }
