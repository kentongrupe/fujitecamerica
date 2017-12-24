import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules/_shared';
import {
    ProjectInfoComponent
} from './project-info.component';
import {
    ProjectsAdditionalComponent
} from './projects-additional.component';
import {
    ProjectsComponent
} from './projects.component';

@NgModule({
    declarations: [
        ProjectInfoComponent,
        ProjectsAdditionalComponent,
        ProjectsComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ProjectInfoComponent,
        ProjectsAdditionalComponent,
        ProjectsComponent
    ],
    entryComponents: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]

})
export class ProjectsModule { }
