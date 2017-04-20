import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    PropertyManagersComponent
} from './property-managers.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        PropertyManagersComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        PropertyManagersComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class PropertyManagersModule { }
