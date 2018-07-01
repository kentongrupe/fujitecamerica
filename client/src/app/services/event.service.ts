import {
    Injectable
} from '@angular/core';
import {
    BaseService
} from 'app/core/BaseService';
import {
    IdManager
} from 'app/core/IdManager';

export interface EventCallback {
    id: number;
    callback: Function;
}

@Injectable()
export class EventService extends BaseService {

    private _events: Map<string, EventCallback[]>;

    constructor() {
        super('EventService');
        this._events = new Map<string, EventCallback[]>();
    }

    public dispatch(name: string, ...args): void {
        if (this._events.has(name)) {
            this._events.get(name).forEach((ec) => {
                ec.callback.apply(null, args);
            });
        }
    }
    public register(name: string, callback: Function): number {
        let id = IdManager.getNew();
        let a = [];
        if (this._events.has(name)) {
            a = this._events.get(name);
        }
        a.push({
            id,
            callback
        });
        this._events.set(name, a);
        return id;
    }
    public unregister(name: string, id: number): void {
        if (this._events.has(name)) {
            let a = this._events.get(name);
            a.remove((ec) => {
                return (ec.id === id);
            });
            this._events.set(name, a);
        }
    }
}
