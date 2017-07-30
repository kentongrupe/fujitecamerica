import {
    Component,
    OnInit
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    AppRoute,
    Project
} from 'app/models';
import {
    DataService,
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html'
})
export class ProjectsComponent extends BaseComponent implements OnInit {

    private _projects: Project[] = [];

    constructor(
        private dataService: DataService,
        private routerService: RouterService,
        private stringService: StringService
    ) {
        super('ProjectsComponent');
    }

    public ngOnInit() {
        super.ngOnInit();

        this.dataService.getProjects({
            locale: StringService.locale
        }, (d) => {
            this._projects = d.projects;
        });
    }

    private _showProject(projectId: number): void {
        this.routerService.to(AppRoute.PROJECT, projectId);
    }
}
