import {
    Pipe,
    PipeTransform
} from '@angular/core';
import {
    BasePipe
} from 'app/core';

@Pipe({
    name: 'formatString'
})
export class FormatStringPipe extends BasePipe implements PipeTransform {

    constructor() {
        super('FormatStringPipe');
    }

    public transform(template: string, ...args) {
        if (this.isNullOrEmpty(template)) {
            return '';
        }
        return template.format.apply(template, args);
    }
}
