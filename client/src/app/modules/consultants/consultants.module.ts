import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    ConsultantsComponent
} from './consultants.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        ConsultantsComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ConsultantsComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ConsultantsModule { }
