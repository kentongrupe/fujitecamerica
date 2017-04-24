import {
    ElementRef,
    Input,
    Renderer
} from '@angular/core';
import {
    Directive
} from '@angular/core';
import {
    BaseDirective
} from 'app/core';
import {
    DataService
} from 'app/services';

@Directive({
    selector: '[html-renderer]'
})
export class HtmlRendererDirective extends BaseDirective {

    private _url: string = '';
    public get url(): string {
        return this._url;
    }
    @Input() public set url(value: string) {
        this._url = value;
        if (!this.isNullOrEmpty(value)) {
            this._render();
        }
    }

    constructor(
        el: ElementRef,
        renderer: Renderer,
        private dataService: DataService
    ) {
        super('HtmlRendererDirective', el, renderer);
    }

    private _render(): void {
        let url = 'assets/html/{0}/{1}-{0}.html'.format(this.locale, this._url);
        this.dataService.getHtml(url, (d) => {
            console.log(d);
        });
    }
}
