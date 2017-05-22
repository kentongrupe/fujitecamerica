import {
    Injectable
} from '@angular/core';
import {
    BaseService
} from 'app/core';

@Injectable()
export class StringService extends BaseService {

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

    private _cache: Map<string, string> = null;

    public get hasStrings(): boolean {
        return ((this._cache !== undefined) && (this._cache !== null) && (this._cache.size > 0));
    }

    constructor() {
        super('StringService');
        this._cache = new Map<string, string>();
    }

    public export(): void {
        let strings = [];
        this._cache.forEach((value, key) => {
            strings.push({
                id: key,
                value
            });
        });
        strings = strings.sort((a, b) => {
            if (a.id < b.id) {
                return -1;
            } else if (a.id > b.id) {
                return 1;
            } else {
                return 0;
            }
        }).map((s) => {
            return '"{0}":"{1}"'.format(s.id, s.value);
        });
        console.log(strings.join(','));
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
            console.log(id);
            if (this.isNullOrEmpty(s)) {
                s = id;
            }
            this._cache.set(id, s);
        }
        return s;
    }
    public set(id: string, value: string): void {
        if (!this._cache.has(id)) {
            this._cache.set(id, value);
        }
    }
}
