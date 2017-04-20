import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    ServiceMaintenanceComponent
} from './service-maintenance.component';
import {
    FujitecSharedModule
} from 'app/modules';

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
    schemas: [NO_ERRORS_SCHEMA]
})
export class ServiceMaintenanceModule { }
