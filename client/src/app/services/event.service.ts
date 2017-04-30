import {
    Injectable
} from '@angular/core';
import {
    BaseService
} from 'app/core';

@Injectable()
export class EventService extends BaseService {

    private _events: Map<string, Function[]>;

    constructor() {
        super('EventService');
        this._events = new Map<string, Function[]>();
    }

    public dispatch(name: string, ...args): void {
        if (this._events.has(name)) {
            this._events.get(name).forEach((callback) => {
                callback.apply(null, args);
            });
        }
    }
    public register(name: string, callback: Function): void {
        let a = [];
        if (this._events.has(name)) {
            a = this._events.get(name);
        }
        a.push(callback);
        this._events.set(name, a);
    }
}
