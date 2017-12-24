import {
    Component,
    OnInit
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    StringService
} from 'app/services';

@Component({
    selector: 'locations',
    templateUrl: 'locations.component.html'
})
export class LocationsComponent extends BaseComponent implements OnInit {

    private _locations: string[] = [];

    constructor(
        private stringService: StringService
    ) {
        super('LocationsComponent');
        this._stringService = stringService;
    }

    public ngOnInit() {
        this._locations = [
            this._getString('atlanta', 'Atlanta'),
            this._getString('baltimore', 'Baltimore'),
            this._getString('calgary', 'Calcary'),
            this._getString('chicago', 'Chicago'),
            this._getString('cincinnati', 'Cincinnati'),
            this._getString('columbus', 'Columbus'),
            this._getString('dayton', 'Dayton'),
            this._getString('dallas', 'Dallas'),
            this._getString('ft-worth', 'Ft Worth'),
            this._getString('houston', 'Houston'),
            this._getString('los-angeles', 'Los Angeles'),
            this._getString('new-york', 'New York'),
            this._getString('orlando-tampa', 'Orlando/Tampa'),
            this._getString('philadelphia', 'Philadelphia'),
            this._getString('seattle', 'Seattle'),
            this._getString('toronto', 'Toronto'),
            this._getString('vancouver', 'Vancouver'),
            this._getString('virginia-northern', 'Virginia (northern)'),
            this._getString('washington-dc', 'Washington DC')
        ];
    }
}
