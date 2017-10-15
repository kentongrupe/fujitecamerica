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
    private _menu0: MenuItem[] = [];
    private _menu1: MenuItem[] = [];
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
            case SectionType.AUTOWALKS:
                this._menuLabel = this._getString('autowalks', 'Autowalks');
                this._menu0 = [
                    {
                        label: this._getString('fujitec-gs8100', 'Fujitec GS8100'),
                        routerLink: AppRoute.AUTOWALKS + '/gs8100'
                    },
                    {
                        label: this._getString('type-s', 'Type S'),
                        routerLink: AppRoute.AUTOWALKS + '/types'
                    },
                    {
                        label: this._getString('type-f', 'Type F'),
                        routerLink: AppRoute.AUTOWALKS + '/typef'
                    },
                    {
                        label: this._getString('type-p', 'Type P'),
                        routerLink: AppRoute.AUTOWALKS + '/typep'
                    }
                ];
                break;
            case SectionType.ELEVATORS:
                this._menuLabel = this._getString('elevators', 'Elevators');
                this._menu0 = [
                    {
                        label: this._getString('mrl', 'MRL'),
                        routerLink: AppRoute.ELEVATORS_SYSTEMS_MRL
                    },
                    {
                        label: this._getString('gearless', 'Gearless'),
                        routerLink: AppRoute.ELEVATORS_SYSTEMS_GEARLESS
                    },
                    {
                        label: this._getString('geared', 'Geared'),
                        routerLink: AppRoute.ELEVATORS_SYSTEMS_GEARED
                    },
                    {
                        label: this._getString('hydro', 'Hydro'),
                        routerLink: AppRoute.ELEVATORS_SYSTEMS_HYDRAULIC
                    },
                    {
                        label: this._getString('remote-monitoring', 'Remote Monitoring'),
                        routerLink: AppRoute.ELEVATORS_MONITORING
                    },
                    {
                        label: this._getString('clean-air-cab', 'Clean Air Cab'),
                        routerLink: AppRoute.ELEVATORS_IONFUL
                    }
                ];
                break;
            case SectionType.ESCALATORS:
                this._menuLabel = this._getString('escalators', 'Escalators');
                this._menu0 = [
                    {
                        label: this._getString('fujitec-gs8000', 'Fujitec GS8000'),
                        routerLink: AppRoute.ESCALATORS + '/gs8000'
                    },
                    {
                        label: this._getString('type-s', 'Type S'),
                        routerLink: AppRoute.ESCALATORS + '/types'
                    },
                    {
                        label: this._getString('type-f', 'Type F'),
                        routerLink: AppRoute.ESCALATORS + '/typef'
                    },
                    {
                        label: this._getString('type-p', 'Type P'),
                        routerLink: AppRoute.ESCALATORS + '/typep'
                    }
                ];
                break;
            case SectionType.SERVICE_MAINTENANCE:
                this._menuLabel = this._getString('service-maintenance', 'Service & Maintenance');
                this._menu1 = [
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
                this._menuLabel = this._getString('modernization', 'Modernization');
                this._menu1 = [
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
            case SectionType.MONITORING:
                this._menuLabel = this._getString('remote-monitoring', 'Remote Monitoring');
                break;
            case SectionType.PROJECTS:
                this._menuLabel = this._getString('projects', 'Projects');
                this._menuDescription = this._getString('view-additional-projects', 'View additional projects');
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
