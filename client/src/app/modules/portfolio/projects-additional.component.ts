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
    selector: 'projects-additional',
    templateUrl: 'projects-additional.component.html'
})
export class ProjectsAdditionalComponent extends BaseComponent implements OnInit {

    private _project: Project = null;
    private _projects: Project[] = [];
    private SectionType = SectionType;

    constructor(
        private dataService: DataService,
        private stringService: StringService
    ) {
        super('ProjectsAdditionalComponent');
    }

    public ngOnInit() {
        super.ngOnInit();

        this.dataService.getProjects({
            additional: true,
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
