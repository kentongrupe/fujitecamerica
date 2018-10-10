import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules/_shared';;
import {
    ProjectComponent
} from './project.component';

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
    schemas: [
        NO_ERRORS_SCHEMA
    ]

})
export class ProjectModule { }
