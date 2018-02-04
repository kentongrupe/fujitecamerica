import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import 'slick-carousel/slick/slick';
import {
    BaseModal
} from 'app/core';
import {
    Project
} from 'app/models';

declare const $;

@Component({
    selector: 'project-info-modal',
    templateUrl: 'project-info.modal.html'
})
export class ProjectInfoModal extends BaseModal {

    private _project: Project = null;
    public get project(): Project {
        return this._project;
    }
    @Input()
    public set project(value: Project) {
        this._project = value;
        if (value && this._modal) {
            this._modal.open();

            if (this._project.imageCount > 0) {
                setTimeout(() => {
                    $('.images-div').slick({
                        dots: true,
                        infinite: true,
                        lazyLoad: 'ondemand',
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                });
            }
        }
    }

    constructor() {
        super('ProjectInfoModal');
    }
}
