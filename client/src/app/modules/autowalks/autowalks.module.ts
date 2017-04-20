import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    AutowalksComponent
} from './autowalks.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        AutowalksComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        AutowalksComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AutowalksModule { }
