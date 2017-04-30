import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    SiteMapComponent
} from './site-map.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        SiteMapComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        SiteMapComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SiteMapModule { }
