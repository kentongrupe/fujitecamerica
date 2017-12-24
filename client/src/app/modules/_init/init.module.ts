import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    InitComponent
} from './init.component';

@NgModule({
    declarations: [
        InitComponent
    ],
    imports: [],
    providers: [],
    bootstrap: [
        InitComponent
    ],
    entryComponents: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InitModule { }
