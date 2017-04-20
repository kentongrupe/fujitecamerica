import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    ModernizationComponent
} from './modernization.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        ModernizationComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ModernizationComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ModernizationModule { }
