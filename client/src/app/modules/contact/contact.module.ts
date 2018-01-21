import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules/_shared';
import {
    IntegerInputDirective
} from 'app/directives';
import {
    ContactComponent
} from './contact.component';

@NgModule({
    declarations: [
        ContactComponent,
        IntegerInputDirective
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ContactComponent
    ],
    entryComponents: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]

})
export class ContactModule { }
