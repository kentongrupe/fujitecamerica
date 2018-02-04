import {
    Component,
    EventEmitter,
    Input,
    Output
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    Project
} from 'app/models';

@Component({
    selector: 'project-info',
    templateUrl: 'project-info.component.html'
})
export class ProjectInfoComponent extends BaseComponent {

    @Input() public project: Project = null;
    @Output() public show: EventEmitter<Project> = new EventEmitter<Project>();

    constructor() {
        super('ProjectInfoComponent');
    }

    private _showProject(): void {
        this.show.emit(this.project);
    }
}
