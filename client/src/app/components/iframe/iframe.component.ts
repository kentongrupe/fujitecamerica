/*===========================================================================*/
/*          Copyright © 2016-2017. APCON, Inc. All Rights Reserved.          */
/*===========================================================================*/

import {
    Component,
    Input
} from '@angular/core';
import {
    DomSanitizer
} from '@angular/platform-browser';
import {
    BaseComponent
} from 'app/core';

export interface IFrameEventData {
    data: any;
    source: string;
    type: string;
}

@Component({
    selector: 'a-iframe',
    templateUrl: 'iframe.template.html'
})
export class IFrameComponent extends BaseComponent {

    private _src: string = null;
    @Input()
    public get src(): string {
        return this._src;
    }
    public set src(value: string) {
        this._src = this.domSanitizer.bypassSecurityTrustResourceUrl(value) as string;
    }

    constructor(
        private domSanitizer: DomSanitizer
    ) {
        super('IFrameComponent');
    }
}

/*===========================================================================*/
/*          Copyright © 2016-2017. APCON, Inc. All Rights Reserved.          */
/*===========================================================================*/
