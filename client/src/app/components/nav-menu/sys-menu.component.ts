import {
    Component,
    OnInit
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    NavMenuComponent
} from './nav-menu.component';
import {
    AppRoute,
    MenuItem
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'sys-menu',
    templateUrl: 'nav-menu.component.html'
})
export class SysMenuComponent extends NavMenuComponent implements OnInit {

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        protected stringService: StringService
    ) {
        super(router, routerService, stringService);
        this._setClassName('SysMenuComponent');
    }

    public ngOnInit() {
        super.ngOnInit();

        this.menu = [
            {
                label: this._getString('elevators', 'elevators'),
                icon: 'elevators',
                routerLink: AppRoute.ELEVATORS,
                items: [
                    {
                        label: this._getString('systems', 'Systems'),
                        routerLink: AppRoute.ELEVATORS_SYSTEMS,
                        items: [
                            {
                                label: this._getString('mrl', 'MRL'),
                                routerLink: AppRoute.ELEVATORS_SYSTEMS_MRL
                            },
                            {
                                label: this._getString('pm-gearless', 'PM Gearless'),
                                routerLink: AppRoute.ELEVATORS_SYSTEMS_GEARLESS
                            },
                            {
                                label: this._getString('geared', 'GEARED'),
                                routerLink: AppRoute.ELEVATORS_SYSTEMS_GEARED
                            },
                            {
                                label: this._getString('hydraulic', 'HYDRAULIC'),
                                routerLink: AppRoute.ELEVATORS_SYSTEMS_HYDRAULIC
                            }
                        ]
                    },
                    {
                        label: this._getString('controllers', 'Controllers'),
                        routerLink: AppRoute.ELEVATORS_CONTROLLERS,
                        items: [
                            {
                                label: this._getString('viridian', 'Viridian'),
                                routerLink: AppRoute.ELEVATORS_CONTROLLERS_VIRIDIAN
                            },
                            {
                                label: this._getString('flex-nx', 'Flex - NX'),
                                routerLink: AppRoute.ELEVATORS_CONTROLLERS_FLEXNX
                            },
                            {
                                label: this._getString('ez-shuttle', 'EZShuttle'),
                                routerLink: AppRoute.ELEVATORS_CONTROLLERS_EZSHUTTLE
                            }
                        ]
                    },
                    {
                        label: this._getString('webemis-monitoring', 'webEMIS Monitoring'),
                        routerLink: AppRoute.ELEVATORS_MONITORING
                    },
                    {
                        label: this._getString('ionful', 'IONFUL'),
                        routerLink: AppRoute.ELEVATORS_IONFUL
                    }
                ]
            },
            {
                label: this._getString('escalators', 'escalators'),
                icon: 'escalators',
                routerLink: AppRoute.ESCALATORS,
                items: [
                    {
                        label: 'GS8000',
                        routerLink: '{0}/{1}'.format(AppRoute.ESCALATORS, 'gs8000')
                    }
                ]
            },
            {
                label: this._getString('ezshuttle-dispatch', 'EZShuttle dispatch'),
                icon: 'ezdispatch',
                routerLink: AppRoute.CONTROLS_DISPATCH,
                items: [
                    {
                        label: this._getString('flex-nx', 'Flex - NX'),
                        routerLink: AppRoute.CONTROLS_DISPATCH_FLEXNX
                    },
                    {
                        label: this._getString('ez-shuttle', 'EZShuttle'),
                        routerLink: AppRoute.CONTROLS_DISPATCH_EZSHUTTLE
                    },
                ]
            },
            {
                label: this._getString('autowalks', 'autowalks'),
                icon: 'autowalks',
                routerLink: AppRoute.AUTOWALKS,
                items: [
                    {
                        label: 'GS8100',
                        routerLink: '{0}/{1}'.format(AppRoute.AUTOWALKS, 'gs8100')
                    }
                ]
            }
        ];
    }
}
