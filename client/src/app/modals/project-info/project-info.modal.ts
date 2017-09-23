import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewChild
} from '@angular/core';
import {
    Modal
} from 'clarity-angular';
import {
    BaseComponent
} from 'app/core';
import {
    Project
} from 'app/models';
import {
    StringService
} from 'app/services';

@Component({
    selector: 'project-info-modal',
    templateUrl: 'project-info.modal.html'
})
export class ProjectInfoModal extends BaseComponent implements OnInit {

    @Output() public close: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('info') private _modal: Modal;

    private _project: Project = null;
    public get project(): Project {
        return this._project;
    }
    @Input() public set project(value: Project) {
        this._project = value;
        if (value && this._modal) {
            this._modal.open();
        }
    }

    constructor(
        private stringService: StringService
    ) {
        super('ProjectInfoModal');
    }

    private _close(): void {
        this._modal.close();
        this.close.emit();
    }
    private _onClick(event: MouseEvent): void {
        if (event.target.className.includes('modal-backdrop')) {
            this._close();
        }
    }
}