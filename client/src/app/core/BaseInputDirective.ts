import {
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    Renderer
} from '@angular/core';
import {
    BaseDirective
} from './BaseDirective';

export class BaseInputDirective extends BaseDirective implements OnInit {

    @Output()
    public change: EventEmitter<string> = new EventEmitter<string>();

    protected invalidClassName: string = 'ng-invalid';
    protected required: boolean = false;
    protected restrict: RegExp = new RegExp('');
    protected validClassName: string = 'ng-valid';
    protected validationRegExp: RegExp = null;

    protected get attributes(): any {
        if (this.input) {
            return this.input.attributes;
        }
        return {};
    }
    protected get input(): any {
        if (this.elementRef && this.elementRef.nativeElement) {
            return this.elementRef.nativeElement;
        }
        return null;
    }
    protected get value(): string {
        if (this.input) {
            return this.input.value;
        }
        return '';
    }
    protected set value(v: string) {
        if (this.input) {
            this.input.value = v;
            this.change.emit(v);
        }
    }

    constructor(className: string = 'BaseInputDirective', el: ElementRef, renderer: Renderer) {
        super(className, el, renderer);
    }

    public ngOnInit() {
        if (this.input) {
            if (this.input.localName.toLowerCase() === 'input') {
                if (this.renderer) {
                    this.renderer.listen(this.input, 'blur', (e: FocusEvent) => {
                        this._blur(e);
                    });
                    this.renderer.listen(this.input, 'change', (e: KeyboardEvent) => {
                        this._change(e);
                    });
                    this.renderer.listen(this.input, 'focus', (e: KeyboardEvent) => {
                        this._focus(e);
                    });
                    this.renderer.listen(this.input, 'keydown', (e: KeyboardEvent) => {
                        this._keyDown(e);
                    });
                }

                this.required = (this.attributes['required'] !== undefined);
            }
        }
    }

    public validate(value: string = null): boolean {
        return this._validate(value);
    }

    protected _blur(event: FocusEvent): void {
        this._markInput(this._validate());
    }
    protected _change(event: Event): void {
        if (this.input) {
            this.change.emit(this.input.value);
        }
    }
    protected _focus(event: Event): void { }
    protected _getAttr(attrName: string): string {
        if (this.attributes[attrName] !== undefined) {
            return this.attributes.getNamedItem(attrName).value;
        }
        return '';
    }
    protected _keyDown(event: KeyboardEvent): Array<string> {
        let key = event.key.toLowerCase();
        let isArrow = key.startsWith('arrow');
        let isBSDel = ['backspace', 'delete'].includes(key);
        let isCCP = (event.ctrlKey || event.metaKey) && ['x', 'c', 'v'].includes(key); // cut, copy, paste
        let isEnter = (event.keyCode === 13);
        let isTab = (key === 'tab');

        if (isArrow || isBSDel || isCCP || isEnter || isTab) {
            return [];
        }

        if (this.isNullOrEmpty(this.restrict.source) || this.restrict.test(key)) {
            let i = event.target;
            let ss = i.selectionStart || 0;
            let se = i.selectionEnd || 0;
            let v = this.value.toString();
            let v0 = v.substr(0, ss);
            let v1 = v.substr(se);

            return [v0, v1];
        }

        event.preventDefault();
        event.stopImmediatePropagation();

        return null;
    }
    protected _markInput(value: boolean): void {
        if (this.input) {
            if (value === true) {
                if (this.input.classList.contains(this.invalidClassName)) {
                    this.input.classList.remove(this.invalidClassName);
                }
                if (!this.input.classList.contains(this.validClassName)) {
                    this.input.classList.add(this.validClassName);
                }
            } else {
                if (this.input.classList.contains(this.validClassName)) {
                    this.input.classList.remove(this.validClassName);
                }
                if (!this.input.classList.contains(this.invalidClassName)) {
                    this.input.classList.add(this.invalidClassName);
                }
            }
        }
    }
    protected _validate(value: string = null): boolean {
        if (value === null) {
            value = this.value;
        }
        if (this.required || !this.isNullOrEmpty(value)) {
            if (this.validationRegExp !== null) {
                return this.validationRegExp.test(value);
            }
        }
        return true;
    }
}
