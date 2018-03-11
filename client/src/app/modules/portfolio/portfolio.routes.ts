import {
    PortfolioComponent
} from './portfolio.component';
import {
    ProjectsAdditionalComponent
} from './projects-additional.component';

export const routes = [
    {
        path: '',
        children: [
            { path: '', component: PortfolioComponent },
            { path: ':additional', component: ProjectsAdditionalComponent }
        ]
    }
];
