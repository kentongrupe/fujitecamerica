if (!Array.prototype.all) {
    Array.prototype.all = function (callback) {
        if (this.length === 0) {
            return true;
        }
        let a = this.filter((el) => {
            return callback(el);
        });
        return (a.length === this.length);
    };
}
if (!Array.prototype.any) {
    Array.prototype.any = function (callback) {
        if (this.length === 0) {
            return false;
        }
        let a = this.filter((el) => {
            return callback(el);
        });
        return (a.length > 0);
    };
}
if (!Array.prototype.clone) {
    Array.prototype.clone = function () {
        return this.slice(0);
    };
}
if (!Array.prototype.contains) {
    Array.prototype.contains = function (obj) {
        let el = this.find((e) => {
            // in our app, every object/model has "id"
            return (obj.id === e.id);
        });
        return (el !== undefined);
    };
}
if (!Array.prototype.getItemIndex) {
    Array.prototype.getItemIndex = function (obj) {
        let i = 0;
        for (; i < this.length; i++) {
            // in our app, every object/model has "id"
            if (obj.id === this[i].id) {
                break;
            }
        }
        return (i === this.length) ? -1 : i;
    };
}
if (!Array.prototype.includes) {
    Array.prototype.includes = (searchElement, fromIndex?: number) => {
        let s = this;
        if ((fromIndex !== undefined) && (fromIndex !== null) && !isNaN(fromIndex)) {
            s = this.substr(fromIndex);
        }
        return s.indexOf(searchElement);
    };
}
if (!Array.prototype.merge) {
    Array.prototype.merge = function (a) {
        let retVal = [];
        let n0 = Math.min(this.length, a.length);
        let n1 = Math.max(this.length, a.length);
        for (let i = 0; i < n0; i++) {
            retVal.push(this[i]);
            retVal.push(a[i]);
        }
        for (let i = n0; i < n1; i++) {
            retVal.push(this[i]);
            retVal.push(a[i]);
        }
        return retVal;
    };
}
if (!Array.prototype.none) {
    Array.prototype.none = function (callback) {
        if (this.length === 0) {
            return true;
        }
        let a = this.filter((el) => {
            return callback(el);
        });
        return (a.length === 0);
    };
}
if (!Array.prototype.remove) {
    Array.prototype.remove = function (callback) {
        if (this.length === 0) {
            return [];
        }
        let a = this.clone();
        let b = [];
        a.forEach((e) => {
            if (callback(e) === true) {
                b.push(e);
            } else {
                this.push(e);
            }
        });
        return b;
    };
}
if (!Array.prototype.removeItemAt) {
    Array.prototype.removeItemAt = function (index) {
        if (this.length === 0) {
            return [];
        }
        return this.remove((e, i) => {
            return (i === index);
        })[0];
    };
}
if (!Array.prototype.sortBy) {
    Array.prototype.sortBy = function (attr) {
        return this.sort((a, b) => {
            if ((a[attr] !== undefined) && (b[attr] !== undefined)) {
                let aa = a[attr].toString().toUpperCase();
                let bb = b[attr].toString().toUpperCase();
                if (aa < bb) {
                    return -1;
                }
                if (aa > bb) {
                    return 1;
                }
            }
            return 0;
        });
    };
}
if (!Boolean.prototype.toInt) {
    Boolean.prototype.toInt = function () {
        if (this === true) {
            return 1;
        }
        return 0;
    };
}
Boolean.parse = function (value) {
    if ((value === undefined) || (value === null)) {
        return false;
    }
    return value.toString().toBoolean();
};
if (!String.prototype.format) {
    String.prototype.format = function () {
        let args = arguments;
        return this.replace(/{(\d+)}/g, (match, num) => {
            return typeof args[num] !== 'undefined' ? args[num] : match;
        });
    };
}
if (!String.prototype.hasLowerCase) {
    String.prototype.hasLowerCase = function () {
        return (this !== this.toUpperCase());
    };
}
if (!String.prototype.hasUpperCase) {
    String.prototype.hasUpperCase = function () {
        return (this !== this.toLowerCase());
    };
}
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function (targetLength, padString = ' ') {
        if (targetLength === undefined) {
            return this;
        }
        let s = String.isNullOrEmpty(this) ? '' : this;
        while (s.length < targetLength) {
            s += padString;
        }
        return s;
    };
}
if (!String.prototype.padStart) {
    String.prototype.padStart = function (targetLength, padString = ' ') {
        if (targetLength === undefined) {
            return this;
        }
        let s = String.isNullOrEmpty(this) ? '' : this;
        while (s.length < targetLength) {
            s = padString + s;
        }
        return s;
    };
}
if (!String.prototype.replaceCharAt) {
    String.prototype.replaceCharAt = function (index, char) {
        if (index < 0) {
            index = this.length - index;
        }
        if (index >= this.length) {
            return this;
        }
        if (String.isNullOrEmpty(char)) {
            return this;
        }
        let s0 = this.substr(0, index);
        let s1 = this.substr(index + 1);
        return s0 + char + s1;
    };
}
if (!String.prototype.toBoolean) {
    String.prototype.toBoolean = function () {
        return ((this.toLowerCase() === 'true') || (this.toLowerCase() === 'yes') || (this === '1'));
    };
}
if (!String.prototype.toClassName) {
    String.prototype.toClassName = function () {
        if (String.isNullOrEmpty(this)) {
            return '';
        }
        return this.toLowerCase().split(' ').filter((s) => {
            return (s.length > 0);
        }).join('-').replace(/_/g, '\-');
    };
}
if (!String.prototype.toEnumName) {
    String.prototype.toEnumName = function () {
        if (String.isNullOrEmpty(this)) {
            return '';
        }
        return this.toLowerCase().split(' ').filter((s) => {
            return (s.length > 0);
        }).join('_').replace(/\-/g, '_').toUpperCase();
    };
}
String.isNullOrEmpty = function (s) {
    return (s === undefined) || (s === null) || (s.toString().replace(' ', '').length === 0);
};

import {
    IdManager
} from './IdManager';
import {
    StringService
} from 'app/services';

export class BaseClass {

    protected _stringService: StringService;

    private _className: string = '';
    public get className(): string {
        return this._className;
    }
    public set className(value: string) {
        throw new Error('property "className" is read-only and cannot be changed to "{0}"'.format(value));
    }

    private _id: number = -1;
    public get id(): number {
        return this._id;
    }

    constructor(className: string = 'BaseClass') {
        this._className = className;
        this._id = IdManager.getNew();
    }

    public hasValue(value: any): boolean {
        return ((value !== undefined) && (value !== null));
    }

    public isNullOrEmpty(value: string): boolean {
        if ((value === undefined) || (value === null)) {
            return true;
        }
        if ((typeof value) !== 'string') {
            value = value.toString();
        }
        return String.isNullOrEmpty(value);
    }

    public parseBoolean(value: any): boolean {
        return Boolean.parse(value);
    }

    protected _getString(id: string, defaultValue?: string): string {
        if (this.isNullOrEmpty(id)) {
            id = '';
        }
        if (this.isNullOrEmpty(defaultValue)) {
            return id;
        }
        let stringId = this.className + '.' + id;
        if (this._stringService) {
            return this._stringService.get(stringId, defaultValue);
        }
        return stringId;
    }
    protected _setClassName(className: string): void {
        this._className = className;
    }
}
