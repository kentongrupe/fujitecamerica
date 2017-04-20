import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    LocationsComponent
} from './locations.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        LocationsComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        LocationsComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class LocationsModule { }
