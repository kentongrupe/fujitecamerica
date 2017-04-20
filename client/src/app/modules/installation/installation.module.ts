import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    InstallationComponent
} from './installation.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        InstallationComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        InstallationComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class InstallationModule { }
