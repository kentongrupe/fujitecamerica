import {
    Injectable
} from '@angular/core';
import {
    BaseService
} from 'app/core';

@Injectable()
export class StorageService extends BaseService {

    private get _storage(): any {
        return localStorage;
    }

    constructor() {
        super('StorageService');
    }

    public clear(): boolean {
        try {
            this._storage.clear();
            return true;
        } catch (e) {
            return false;
        }
    }
    public getItem(key: string): any {
        try {
            let s = this._storage.getItem(key);
            let o = JSON.parse(s);
            return o;
        } catch (e) {
            return null;
        }
    }
    public removeItem(key: string): boolean {
        try {
            this._storage.removeItem(key);
            return true;
        } catch (e) {
            return false;
        }
    }
    public setItem(key: string, value: any): boolean {
        try {
            let s = JSON.stringify(value);
            this._storage.setItem(key, s);
            return true;
        } catch (e) {
            return false;
        }
    }
}
