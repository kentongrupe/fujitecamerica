import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    ArchitectsComponent
} from './architects.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        ArchitectsComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ArchitectsComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ArchitectsModule { }
