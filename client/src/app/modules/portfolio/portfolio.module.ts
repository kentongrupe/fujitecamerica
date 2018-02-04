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
    PortfolioComponent
} from './portfolio.component';

@NgModule({
    declarations: [
        ProjectInfoComponent,
        ProjectsAdditionalComponent,
        PortfolioComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ProjectInfoComponent,
        ProjectsAdditionalComponent,
        PortfolioComponent
    ],
    entryComponents: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]

})
export class ProjectsModule { }
