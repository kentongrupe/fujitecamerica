import {
    Component,
    OnInit
} from '@angular/core';
import {
    Headers,
    Http,
    RequestOptions,
    Response,
    URLSearchParams
} from '@angular/http';
import {
    BaseComponent
} from 'app/core';
import {
    AppEvent
} from 'app/models';
import {
    EventService,
    StringService
} from 'app/services';

@Component({
    selector: 'init',
    template: ``
})
export class InitComponent extends BaseComponent implements OnInit {

    constructor(
        private http: Http,
        private eventService: EventService,
        private stringService: StringService
    ) {
        super('InitComponent');
    }

    public ngOnInit() {
        super.ngOnInit();

        let url = 'assets/locales/{0}/_strings.json'.format(StringService.locale);
        let options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        // (this.http
        //     .get(url, options)
        //     .map((res) => {
        //         return res.text();
        //     }))
        //     .subscribe((result: string) => {
        //         let o = JSON.parse(result);
        //         for (let id in o) {
        //             if (o[id] !== undefined) {
        //                 this.stringService.set(id, o[id]);
        //             }
        //         }
        //         this.eventService.dispatch(AppEvent.INIT_COMPLETE);
        //     }, (error) => {
        //         console.error(error);
        //         this.eventService.dispatch(AppEvent.INIT_COMPLETE);
        //     });
        this.eventService.dispatch(AppEvent.INIT_COMPLETE);
    }
}
