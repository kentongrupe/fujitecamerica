import {
    BaseModel,
    Utils
} from 'app/core';
import {
    MediaType
} from './MediaType';

export class Media extends BaseModel {

    public type: MediaType = MediaType.IMAGE;
    public url: string = '';

    constructor(data: any = null) {
        super('Media');
        this.parseObject(data);

        if (data) {
            if (data.type) {
                this.type = parseInt(MediaType[data.type.toUpperCase()]);
            }
        }

        if (this.type === MediaType.IMAGE) {
            this.url = '/data/slides/media/{0}'.format(this.url);
        }
    }
}
