import {
    ElementRef,
    Injectable
} from '@angular/core';
import {
    Title
} from '@angular/platform-browser';
import {
    BaseService
} from 'app/core';

@Injectable()
export class DOMService extends BaseService {

    constructor(private titleService: Title) {
        super('DOMService');
    }

    public scrollIntoView(element: Element): void {
        element.scrollIntoView(true);
    }
}
