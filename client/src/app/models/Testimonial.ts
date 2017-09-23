import {
    BaseModel,
    Utils
} from 'app/core';
import {
    UserRole
} from './UserRole';
import {
    TestimonialMode
} from './TestimonialMode';

export class Testimonial extends BaseModel {

    public city: string = '';
    public mode: TestimonialMode = TestimonialMode.NONE;
    public name: string = '';
    public state: string = '';
    public text: string = '';

    constructor(data: any = null) {
        super('Testimonial');
        this.parseObject(data);
    }
}
