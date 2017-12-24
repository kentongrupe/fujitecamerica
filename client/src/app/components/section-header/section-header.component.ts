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
    private _menuLabel: string = '';

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

        switch (this.sectionType) {
            case SectionType.AUTOWALKS:
                this._menuLabel = this._getString('autowalks', 'Autowalks');
                this._menu = [
                    {
                        label: this._getString('fujitec-gs8100', 'Fujitec GS8100'),
                        routerLink: AppRoute.AUTOWALKS_GS8100
                    },
                    {
                        label: this._getString('type-s', 'Type S'),
                        routerLink: AppRoute.AUTOWALKS_TYPE_S
                    },
                    {
                        label: this._getString('type-f', 'Type F'),
                        routerLink: AppRoute.AUTOWALKS_TYPE_F
                    },
                    {
                        label: this._getString('type-p', 'Type P'),
                        routerLink: AppRoute.AUTOWALKS_TYPE_P
                    }
                ];
                break;
            case SectionType.DISPATCH:
                this._menuLabel = this._getString('controls-dispatch', 'Controls & Dispatch');
                this._menu = [
                    {
                        label: this._getString('flex-nx', 'Flex-NX'),
                        routerLink: AppRoute.DISPATCH_FLEXNX
                    },
                    {
                        label: this._getString('ezshuttle', 'EZShuttle'),
                        routerLink: AppRoute.DISPATCH_EZSHUTTLE
                    }
                ];
                break;
            case SectionType.ELEVATORS:
                this._menuLabel = this._getString('elevators', 'Elevators');
                this._menu = [
                    {
                        label: this._getString('mrl', 'MRL'),
                        routerLink: AppRoute.ELEVATORS_MRL
                    },
                    {
                        label: this._getString('gearless', 'Gearless'),
                        routerLink: AppRoute.ELEVATORS_GEARLESS
                    },
                    {
                        label: this._getString('geared', 'Geared'),
                        routerLink: AppRoute.ELEVATORS_GEARED
                    },
                    {
                        label: this._getString('hydro', 'Hydro'),
                        routerLink: AppRoute.ELEVATORS_HYDRAULIC
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
                this._menu = [
                    {
                        label: this._getString('fujitec-gs8000', 'Fujitec GS8000'),
                        routerLink: AppRoute.ESCALATORS_GS8000
                    },
                    {
                        label: this._getString('type-s', 'Type S'),
                        routerLink: AppRoute.ESCALATORS_TYPE_S
                    },
                    {
                        label: this._getString('type-f', 'Type F'),
                        routerLink: AppRoute.ESCALATORS_TYPE_F
                    },
                    {
                        label: this._getString('type-p', 'Type P'),
                        routerLink: AppRoute.ESCALATORS_TYPE_P
                    }
                ];
                break;
            case SectionType.INSTALLATION:
                this._menuLabel = this._getString('installation', 'Installation');
                break;
            case SectionType.SERVICE_MAINTENANCE:
                this._menuLabel = this._getString('service-maintenance', 'Service & Maintenance');
                break;
            case SectionType.MODERNIZATION:
                this._menuLabel = this._getString('modernization', 'Modernization');
                break;
            case SectionType.PROJECTS:
                this._menuLabel = this._getString('projects', 'Projects');
                this._menu = [
                    {
                        label: this._getString('view-additional-projects', 'View additional projects'),
                        routerLink: AppRoute.PROJECTS_ADDITIONAL
                    }
                ];
                break;
            default:
                break;
        }
    }

    public onMenuClick(item: MenuItem, event?: MouseEvent): void {
        super.onMenuClick(item, event);
        this._expanded = false;
    }
    private _toggleMenu(): void {
        this._expanded = !this._expanded;
    }
}
