import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    DestinationControlComponent
} from './destination-control.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        DestinationControlComponent
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
