import {
    Pipe,
    PipeTransform
} from '@angular/core';
import {
    BasePipe
} from 'app/core';
import {
    StringService
} from 'app/services';

@Pipe({
    name: 'getString'
})
export class GetStringPipe extends BasePipe implements PipeTransform {

    constructor(private stringService: StringService) {
        super('GetStringPipe');
    }

    public transform(...args) {
        let id: string = '';
        let defaultValue: string = '';
        switch (args.length) {
            case 2:
                id = args[0];
                defaultValue = args[1];
                break;
            case 3:
                let obj = args[0];
                let name = '';
                if ((typeof obj) === 'string') {
                    name = obj;
                } else if (obj.className !== undefined) {
                    name = obj.className;
                }
                id = '{0}.{1}'.format(name, args[1]);
                defaultValue = args[2];
                break;
            default:
                // ERROR
                break;
        }
        return this.stringService.get(id, defaultValue);
    }
}
