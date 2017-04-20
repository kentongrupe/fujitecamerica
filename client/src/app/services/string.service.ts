import {
    Injectable
} from '@angular/core';
import {
    BaseService
} from 'app/core';

@Injectable()
export class StringService extends BaseService {

    private _cache: Map<string, string>;

    constructor() {
        super('StringService');
        this._cache = new Map<string, string>();
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
            // this._debug('string "{0}" found. returning "{1}".'.format(id, s));
        } else {
            if (this.isNullOrEmpty(s)) {
                s = id;
            }
            this._cache.set(id, s);
        }
        return s;
    }
}
