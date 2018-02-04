import {
    Component,
    Input
} from '@angular/core';
import {
    BaseModal
} from 'app/core';

@Component({
    selector: 'alert',
    templateUrl: 'alert.modal.html'
})
export class AlertModal extends BaseModal {

    @Input()
    public message: string = '';
    @Input()
    public title: string = '';

    constructor() {
        super('AlertModal');
    }
}
