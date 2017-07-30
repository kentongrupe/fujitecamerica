import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    ProjectInfoComponent
} from './project-info.component';
import {
    ProjectsComponent
} from './projects.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        ProjectInfoComponent,
        ProjectsComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ProjectInfoComponent,
        ProjectsComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProjectsModule { }
