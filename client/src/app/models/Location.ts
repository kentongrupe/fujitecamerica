import {
    BaseModel,
    Utils
} from 'app/core';

export class Location extends BaseModel {

    public email: string = '';
    public images: string[] = [];
    public location: string = '';
    public name: string = '';
    public phone: string = '';
    public serviceArea: string = '';

    public get imageUrl(): string {
        return '/data/locations/images/{0}.jpg'.format(this.name);
    }

    constructor(data: any = null) {
        super('Location');
        this.parseObject(data);
    }
}
