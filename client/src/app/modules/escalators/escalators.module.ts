import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    EscalatorsComponent
} from './escalators.component';
import {
    FujitecSharedModule
} from 'app/modules';

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
    schemas: [NO_ERRORS_SCHEMA]
})
export class EscalatorsModule { }
