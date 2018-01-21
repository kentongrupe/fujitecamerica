import {
    Component,
    OnInit
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

@Component({
    selector: 'locations',
    templateUrl: 'locations.component.html'
})
export class LocationsComponent extends BaseComponent implements OnInit {

    private _location: Location = null;
    private _locations: Location[] = [];

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
            }
        });
    }

    private _onClose(): void {
        this._location = null;
    }
    private _showLocation(location: Location): void {
        this._location = location;
    }
}
