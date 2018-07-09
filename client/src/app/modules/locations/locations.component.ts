import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    BaseRouteComponent
} from 'app/core';
import {
    Location, AppEvent
} from 'app/models';
import {
    DataService,
    EventService,
    StringService
} from 'app/services';

declare const $;

@Component({
    selector: 'locations',
    templateUrl: 'locations.component.html'
})
export class LocationsComponent extends BaseRouteComponent implements OnDestroy, OnInit {

    private _height: string = '0px';
    private _initComplete: boolean = false;
    private _location: Location = null;
    private _locations: Location[] = [];
    @ViewChild('map')
    private _map: ElementRef;
    private _viewBox: string = '0 0 860 750';
    private _width: string = '0px';

    constructor(
        protected route: ActivatedRoute,
        protected router: Router,
        private dataService: DataService,
        private eventService: EventService,
        private stringService: StringService
    ) {
        super('LocationsComponent', route, router);
        this._stringService = stringService;
    }

    public ngOnDestroy() {
        this._unregisterEvents(this.eventService, [
            AppEvent.RESIZE
        ]);
    }
    public ngOnInit() {
        this.dataService.getLocations((d) => {
            if (this.hasValue(d.locations) && this.hasValue(d.locations[StringService.locale])) {
                this._locations = d.locations[StringService.locale].map((l) => {
                    return new Location(l);
                });
            }
        });

        this._eventIds = [
            this.eventService.register(AppEvent.RESIZE, () => {
                this._resize();
            })
        ];

        this._resize();
    }

    private _onClick(event: MouseEvent): void {
        let id = $(event.currentTarget).attr('id');
        let l = this._locations.find((l_) => {
            return (l_.name === id);
        });
        if (this.hasValue(l)) {
            this._showLocation(l);
        }
    }
    private _onClose(): void {
        this._location = null;
    }
    private _resize(): void {
        let W = 860;
        let H = 750;
        let R = W / H;

        let m = $(this._map.nativeElement);
        let w = m.width();
        let h = w / R;

        this._width = w + 'px';
        this._height = h + 'px';

        this._viewBox = '0 0 {0} {1}'.format(W, H);
    }
    private _showLocation(location: Location): void {
        this._location = location;
    }
}
