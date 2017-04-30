import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules';
import {
    DispatchComponent,              // home > ezshuttle dispatch
    DispatchEZShuttleComponent,     // home > ezshuttle dispatch > ezshuttle
    DispatchFlexNXComponent         // home > ezshuttle dispatch > flex-nx
} from './';

@NgModule({
    declarations: [
        DispatchComponent,              // home > ezshuttle dispatch
        DispatchEZShuttleComponent,     // home > ezshuttle dispatch > ezshuttle
        DispatchFlexNXComponent         // home > ezshuttle dispatch > flex-nx
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        DispatchComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class DispatchModule { }
