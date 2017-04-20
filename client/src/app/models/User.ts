import {
    BaseModel,
    Utils
} from 'app/core';
import {
    UserRole
} from './UserRole';

export class User extends BaseModel {

    public username: string = '';
    public userRole: UserRole = UserRole.GUEST;

    constructor(data: any = null) {
        super('User');
        this.parseObject(data);
    }
}
