import {
    Component
} from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    Router
} from '@angular/router';
import {
    BaseRouteComponent,
} from 'app/core';
import {
    Project
} from 'app/models';
import {
    DataService
} from 'app/services';

@Component({
    selector: 'project',
    templateUrl: 'project.component.html'
})
export class ProjectComponent extends BaseRouteComponent {

    private _project: Project = null;

    constructor(
        protected route: ActivatedRoute,
        protected router: Router,
        private dataService: DataService
    ) {
        super('ProjectComponent', route, router);
    }

    protected _onNavigationEnd(event: NavigationEnd): void {
        super._onNavigationEnd(event);

        let projectId = parseInt(this._getParam('projectId'));

        this.dataService.getProject({
            projectId
        }, (d) => {
            this._project = d;
        });
    }
}
