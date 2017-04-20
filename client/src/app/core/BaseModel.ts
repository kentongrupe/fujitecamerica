import {
    BaseClass
} from './BaseClass';
import {
    Utils
} from './Utils';

export class BaseModel extends BaseClass {

    constructor(className: string = 'BaseModel') {
        super(className);
    }

    public parseObject(obj: any, options?: any): void {
        Utils.parseObject(obj, this, options);
    }
}
