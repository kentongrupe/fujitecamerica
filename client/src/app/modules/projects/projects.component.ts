import {
    Component,
    OnInit
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    AppRoute,
    Project,
    SectionType
} from 'app/models';
import {
    DataService,
    StringService
} from 'app/services';

@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html'
})
export class ProjectsComponent extends BaseComponent implements OnInit {

    private _project: Project = null;
    private _projects: Project[] = [];
    private _sectionType = SectionType;

    constructor(
        private dataService: DataService,
        private stringService: StringService
    ) {
        super('ProjectsComponent');
    }

    public ngOnInit() {
        super.ngOnInit();

        this.dataService.getProjects({
            locale: StringService.locale
        }, (d) => {
            this._projects = d.projects.map((p) => {
                return new Project(p);
            });
        });
    }

    private _onClose(): void {
        this._project = null;
    }
    private _showProject(projectId: number): void {
        this.dataService.getProject({ projectId }, (p) => {
            this._project = p;
        });
        // this.routerService.to(AppRoute.PROJECT, projectId);
    }
}
