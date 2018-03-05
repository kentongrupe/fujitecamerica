import {
    BaseModel,
    Utils
} from 'app/core';
import {
    Point
} from './Point';

export class Location extends BaseModel {

    public email: string = '';
    public images: string[] = [];
    public location: string = '';
    public marker: Point = new Point();
    public name: string = '';
    public phone: string = '';
    public serviceArea: string = '';

    public get imageUrl(): string {
        return '/data/locations/images/{0}.jpg'.format(this.name);
    }

    constructor(data: any = null) {
        super('Location');
        this.parseObject(data, {
            ignore: 'marker'
        });
        if (data) {
            if (data.marker !== undefined) {
                let p = data.marker
                    .split(',')
                    .map((p_) => {
                        return parseInt(p_);
                    });
                this.marker = new Point(p[0], p[1]);
            }
        }
    }
}
