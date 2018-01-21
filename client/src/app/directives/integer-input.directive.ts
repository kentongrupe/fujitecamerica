import {
    Directive,
    ElementRef,
    Renderer
} from '@angular/core';
import {
    BaseInputDirective
} from 'app/core';

@Directive({
    selector: '[integer-input]'
})
export class IntegerInputDirective extends BaseInputDirective {

    public max: number = Number.MAX_SAFE_INTEGER;
    private _min: number = Number.MIN_SAFE_INTEGER;
    get min(): number {
        return this._min;
    }
    set min(value: number) {
        this._min = value;
        let r = '[0-9';
        if (value < 0) {
            r += '\-';
        }
        r += ']';
        this.restrict = new RegExp(r);
    }

    constructor(el: ElementRef, renderer: Renderer) {
        super('IntegerInputDirective', el, renderer);
        this.restrict = new RegExp('[0-9]');
    }

    protected _change(event: Event): void {
        super._change(event);
        let v = this._min.toString();
        if (!this.isNullOrEmpty(this.value)) {
            let f = parseFloat(this.value);
            if (!isNaN(f)) {
                v = this._clampValue(f).toString();
            }
        }
        if (v !== this.value) {
            this.value = v;
        }
    }
    protected _focus(event: Event): void {
        super._focus(event);
        if (!this.isNullOrEmpty(this.value)) {
            let v = this._clampValue(parseFloat(this.value)).toString();
            if (v !== this.value) {
                this.value = v;
            }
        }
    }
    protected _keyDown(event: KeyboardEvent): Array<string> {
        let v: Array<string> = super._keyDown(event);
        let isValid = (v !== null);
        if (isValid) {
            if (v.length > 0) {
                let n = parseInt(event.key);
                let isInt = Number.isInteger(n);

                if (isInt) {
                    let vn = v[0] + n.toString() + v[1];
                    let nn = parseInt(vn);
                    let isInRange = this._isInRange(nn);

                    isValid = isInRange;
                }
            }
        }
        if (!isValid) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
        return v;
    }
    protected _validate(): boolean {
        if (!this.isNullOrEmpty(this.value)) {
            return this._isInRange(parseInt(this.value.toString()));
        }
        return true;
    }
    private _clampValue(value: number): number {
        if (this._isInRange(value) && (value >= this.min)) {
            return value;
        }
        let v = Math.min(this.max, Math.max(this.min, value));
        return v;
    }
    private _isInRange(value: number): boolean {
        let i = parseInt(this._getAttr('min'));
        if (!isNaN(i) && (i !== this.min)) {
            this.min = i;
        }
        let a = parseInt(this._getAttr('max'));
        if (!isNaN(a) && (a !== this.max)) {
            this.max = a;
        }
        return (value <= this.max);
    }
}
