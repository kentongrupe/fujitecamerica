import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules';
import {
    DestinationControlComponent,        // home > destination control
    DestinationEZShuttleComponent,      // home > destination control > ezshuttle
    DestinationFlexNXComponent          // home > destination control > flex-nx
} from './';

@NgModule({
    declarations: [
        DestinationControlComponent,        // home > destination control
        DestinationEZShuttleComponent,      // home > destination control > ezshuttle
        DestinationFlexNXComponent          // home > destination control > flex-nx
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        DestinationControlComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class DestinationControlModule { }
