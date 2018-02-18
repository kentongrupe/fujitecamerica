import {
    BaseModel,
    Utils
} from 'app/core';
import {
    UserRole
} from './UserRole';

export class Leadership extends BaseModel {

    public leadershipId: string = '';
    public name: string = '';
    public profiles: string[] = [];
    public title: string = '';

    public get thumbUrl(): string {
        // return '/data/leaderships/images/{0}.jpg'.format(this.leadershipId);
        return '/data/leaderships/images/ren.jpg';
    }

    constructor(data: any = null) {
        super('Leadership');
        this.parseObject(data, {
            map: {
                id: 'leadershipId'
            }
        });
    }
}
