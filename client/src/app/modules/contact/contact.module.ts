import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    ContactComponent
} from './contact.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ContactComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ContactModule { }
