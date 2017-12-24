import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules/_shared';
import {
    ServiceMaintenanceComponent
} from './service-maintenance.component';

@NgModule({
    declarations: [
        ServiceMaintenanceComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ServiceMaintenanceComponent
    ],
    entryComponents: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]

})
export class ServiceMaintenanceModule { }
