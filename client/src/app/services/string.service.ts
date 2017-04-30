import {
    Injectable
} from '@angular/core';
import {
    BaseService
} from 'app/core';

@Injectable()
export class StringService extends BaseService {

    public static locale: string = 'en';

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
