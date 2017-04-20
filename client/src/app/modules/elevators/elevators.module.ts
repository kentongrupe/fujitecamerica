import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    ElevatorsComponent
} from './elevators.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        ElevatorsComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ElevatorsComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ElevatorsModule { }
