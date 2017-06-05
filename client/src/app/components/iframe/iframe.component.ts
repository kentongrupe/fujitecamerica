import {
    Component,
    ElementRef,
    Input,
    ViewChild
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

    @Input() public allowFullscreen: boolean = false;
    private _src: string = null;
    @Input()
    public get src(): string {
        return this._src;
    }
    public set src(value: string) {
        this._src = this.domSanitizer.bypassSecurityTrustResourceUrl(value) as string;
    }
    @ViewChild('iframe') private _iframe: ElementRef;

    public get iframe(): HTMLIFrameElement {
        if (this._iframe) {
            return this._iframe.nativeElement;
        }
        return null;
    }

    constructor(
        private domSanitizer: DomSanitizer
    ) {
        super('IFrameComponent');
    }
}
