import {
    Injectable
} from '@angular/core';
import {
    BaseService
} from 'app/core/BaseService';

@Injectable()
export class StringService extends BaseService {

    public static data: Map<string, string> = new Map<string, string>();

    private static _locale: string = 'en';
    public static get locale(): string {
        return this._locale;
    }
    public static set locale(value: string) {
        if (String.isNullOrEmpty(value)) {
            value = 'en';
        }
        value = value.substr(0, 2).toLowerCase();
        switch (value) {
            case 'en':
            case 'ja':
                break;
            default:
                value = 'en';
                break;
        }
        console.debug('locale = "{0}"'.format(value));
        this._locale = value;
    }

    private get _cache(): Map<string, string> {
        return StringService.data;
    }

    public get hasStrings(): boolean {
        return ((this._cache !== undefined) && (this._cache !== null) && (this._cache.size > 0));
    }

    constructor() {
        super('StringService');
    }

    public export(): void {
        let strings = [];
        this._cache.forEach((value, key) => {
            strings.push(key);
        });
        strings.sort();
        console.log(strings.map((s) => {
            return '"{0}":"{1}"'.format(s, this._cache.get(s));
        }).join());
    }
    public get(id: string, defaultValue?: string): string {
        // console.debug('get string with id "{0}"'.format(id));
        if (this.isNullOrEmpty(id)) {
            return '';
        }
        if (this.isNullOrEmpty(defaultValue)) {
            return id;
        }
        let s: string = defaultValue;
        if (this._cache.has(id)) {
            s = this._cache.get(id);
        } else {
            // console.log(id);
            if (this.isNullOrEmpty(s)) {
                s = id;
            }
            this._cache.set(id, s);
        }
        return s;
    }
}
