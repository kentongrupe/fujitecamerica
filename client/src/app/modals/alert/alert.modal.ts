import {
    Component
} from '@angular/core';
import {
    BaseModal
} from 'app/core';

@Component({
    selector: 'alert',
    templateUrl: 'alert.modal.html'
})
export class AlertModal extends BaseModal {

    public message: string = '';

    constructor(
    ) {
        super('AlertModal');
    }

    private _close(): void {
        // this.alertModal.close();
    }
}
