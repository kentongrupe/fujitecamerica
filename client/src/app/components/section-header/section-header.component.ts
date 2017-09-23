import {
    Component,
    Input,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    BaseNavRouteComponent
} from 'app/core';
import {
    AppRoute,
    MenuItem,
    SectionType
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'section-header',
    templateUrl: 'section-header.component.html'
})
export class SectionHeaderComponent extends BaseNavRouteComponent implements OnInit {

    @Input() public sectionType: SectionType = SectionType.UNKNOWN;

    private _background: string = '';
    private _expanded: boolean = false;
    private _menuItems: Array<MenuItem> = [];
    private _menuDescription: string = '';
    private _menuLabel: string = '';
    private _nav: string = '';

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        protected stringService: StringService
    ) {
        super('SectionHeaderComponent', router, routerService);
        this._stringService = stringService;
    }

    public ngOnInit() {
        super.ngOnInit();

        this._background = SectionType[this.sectionType].toClassName();
        this._menuDescription = '';
        this._nav = '';

        switch (this.sectionType) {
            case SectionType.INSTALLATION:
                this._menuLabel = this._getString('installation', 'Installation').toUpperCase();
                this._menuItems = [
                    {
                        label: this._getString('elevators', 'Elevators'),
                        routerLink: AppRoute.INSTALLATION_ELEVATORS
                    },
                    {
                        label: this._getString('escalators', 'Escalators'),
                        routerLink: AppRoute.INSTALLATION_ESCALATORS
                    },
                    {
                        label: this._getString('autowalks', 'Autowalks'),
                        routerLink: AppRoute.INSTALLATION_AUTOWALKS
                    }
                ];
                break;
            case SectionType.SERVICE_MAINTENANCE:
                this._menuLabel = this._getString('service-maintenance', 'Service & Maintenance').toUpperCase();
                this._menuItems = [
                    {
                        label: this._getString('elevators', 'Elevators'),
                        routerLink: AppRoute.SERVICE_MAINTENANCE_ELEVATORS
                    },
                    {
                        label: this._getString('escalators', 'Escalators'),
                        routerLink: AppRoute.SERVICE_MAINTENANCE_ESCALATORS
                    },
                    {
                        label: this._getString('autowalks', 'Autowalks'),
                        routerLink: AppRoute.SERVICE_MAINTENANCE_AUTOWALKS
                    },
                    {
                        label: this._getString('foreigh-maintenance', 'Foreign Maintenance'),
                        routerLink: AppRoute.SERVICE_MAINTENANCE_FOREIGN
                    }
                ];
                break;
            case SectionType.MODERNIZATION:
                this._menuLabel = this._getString('modernization', 'Modernization').toUpperCase();
                this._menuItems = [
                    {
                        label: this._getString('elevators', 'Elevators'),
                        routerLink: AppRoute.MODERNIZATION_ELEVATORS
                    },
                    {
                        label: this._getString('escalators', 'Escalators'),
                        routerLink: AppRoute.MODERNIZATION_ESCALATORS
                    },
                    {
                        label: this._getString('autowalks', 'Autowalks'),
                        routerLink: AppRoute.MODERNIZATION_AUTOWALKS
                    }
                ];
                break;
            case SectionType.PROJECTS:
                this._menuLabel = this._getString('projects', 'Projects').toUpperCase();
                this._menuDescription = this._getString('view-additional-projects', 'View additional projects').toUpperCase();
                this._nav = AppRoute.PROJECTS_ADDITIONAL;
                break;
            default:
                break;
        }
    }

    public onMenuClick(item: MenuItem, event?: MouseEvent): void {
        super.onMenuClick(item, event);
        this._expanded = false;
    }
    private _onClick(): void {
        if (!this.isNullOrEmpty(this._nav)) {
            this.routerService.to(this._nav);
        }
    }
    private _toggleMenu(): void {
        this._expanded = !this._expanded;
    }
}
