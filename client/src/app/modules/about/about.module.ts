import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    AboutComponent
} from './about.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        AboutComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AboutModule { }
