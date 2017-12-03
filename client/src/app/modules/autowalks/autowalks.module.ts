import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    AutowalksComponent,             // home > autowalks
    AutowalksTypeFComponent,        // home > autowalks > type-f
    AutowalksTypePComponent,        // home > autowalks > type-p
    AutowalksTypeSComponent         // home > autowalks > type-s
} from './';
import {
    AutowalksGS8100Component        // home > autowalks > gs8100
} from './gs8100';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        AutowalksComponent,             // home > autowalks
        AutowalksGS8100Component,       // home > autowalks > gs8100
        AutowalksTypeFComponent,        // home > autowalks > type-f
        AutowalksTypePComponent,        // home > autowalks > type-p
        AutowalksTypeSComponent         // home > autowalks > type-s
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
