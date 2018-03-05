import {
    Component,
    ElementRef,
    HostListener,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    Location
} from 'app/models';
import {
    DataService,
    StringService
} from 'app/services';

declare const $;

@Component({
    selector: 'locations',
    templateUrl: 'locations.component.html'
})
export class LocationsComponent extends BaseComponent implements OnInit {

    private _height: string = '0px';
    private _initComplete: boolean = false;
    private _location: Location = null;
    private _locations: Location[] = [];
    @ViewChild('map')
    private _map: ElementRef;
    private _viewBox: string = '0 0 860 750';
    private _width: string = '0px';

    constructor(
        private dataService: DataService,
        private stringService: StringService
    ) {
        super('LocationsComponent');
        this._stringService = stringService;
    }

    public ngOnInit() {
        this.dataService.getLocations((d) => {
            if (this.hasValue(d.locations) && this.hasValue(d.locations[StringService.locale])) {
                this._locations = d.locations[StringService.locale].map((l) => {
                    return new Location(l);
                });

                this._onResize(null);
            }
        });
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
    @HostListener('window:resize', ['$event'])
    private _onResize(event): void {
        let W = 860;
        let H = 750;
        let R = W / H;

        let m = $(this._map.nativeElement);
        let w = m.width();
        let h = m.height();
        let r = w / h;

        r = W / w;

        this._width = '{0}px'.format(w);
        this._height = '{0}px'.format(h);

        w *= r;
        h *= r;

        this._viewBox = '0 0 {0} {1}'.format(w, h);
    }
    private _showLocation(location: Location): void {
        this._location = location;
    }
}
