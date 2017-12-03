import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules';
import {
    EscalatorsComponent,            // home > escalators
    EscalatorsGS8000Component,      // home > escalators > gs8000
    EscalatorsTypePComponent,       // home > escalators > type-p
    EscalatorsTypeSComponent        // home > escalators > type-s
} from './';
import {
    EscalatorsTypeFComponent        // home > escalators > type-f
} from './type-f';

@NgModule({
    declarations: [
        EscalatorsComponent,            // home > escalators
        EscalatorsGS8000Component,      // home > escalators > gs8000
        EscalatorsTypeFComponent,       // home > escalators > type-f
        EscalatorsTypePComponent,       // home > escalators > type-p
        EscalatorsTypeSComponent        // home > escalators > type-s
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
