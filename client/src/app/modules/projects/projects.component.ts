import {
    Component,
    OnInit
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    BaseProductRouteComponent
} from 'app/core';
import {
    AppRoute,
    Project,
    SectionType
} from 'app/models';
import {
    DataService,
    DOMService,
    StringService
} from 'app/services';

@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html'
})
export class ProjectsComponent extends BaseProductRouteComponent implements OnInit {

    private _project: Project = null;
    private _projects: Project[] = [];
    private SectionType = SectionType;

    constructor(
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router,
        private dataService: DataService,
        private stringService: StringService
    ) {
        super('ProjectsComponent', domService, route, router);
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
    private _showProject(project: Project): void {
        this._project = project;
        // this.dataService.getProject({ projectId }, (p) => {
        //     this._project = p;
        // });
        // this.routerService.to(AppRoute.PROJECT, projectId);
    }
}
