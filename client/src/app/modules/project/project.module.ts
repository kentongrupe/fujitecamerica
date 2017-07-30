import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    ProjectComponent
} from './project.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        ProjectComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ProjectComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProjectModule { }
