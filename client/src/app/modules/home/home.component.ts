import {
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    BaseNavRouteComponent
} from 'app/core';
import {
    AppRoute,
    MenuItem
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseNavRouteComponent implements OnInit {

    @ViewChild('slides') private _slidesDiv: ElementRef;

    private _intervalId: any = null;
    private _proMenu: MenuItem[] = [];
    private _slides: any[] = [];
    private _slideHeight: number = 300;
    private _slideWidth: number = 1200;
    private _sliding: boolean = false;
    private _subMenu: MenuItem[] = [];
    private _sysMenu: MenuItem[] = [];

    private get _slidesRect(): ClientRect {
        if (this._slidesDiv && this._slidesDiv.nativeElement) {
            return (this._slidesDiv.nativeElement as HTMLDivElement).getClientRects()[0];
        }
        let r = {
            left: 0,
            top: 0,
            right: 1200,
            bottom: 300
        } as ClientRect;
        return r;
    }

    constructor(
        protected router: Router,
        protected routerService: RouterService,
        private stringService: StringService
    ) {
        super('HomeComponent', router, routerService);
        this._stringService = stringService;
    }

    public ngOnInit() {
        this._slides = [
            {
                url: '/assets/img/ElevatorLobbyBW.jpg'
            },
            {
                url: '/assets/img/ElevatorLobbyBW.jpg'
            },
            {
                url: '/assets/img/ElevatorLobbyBW.jpg'
            },
            {
                url: '/assets/img/ElevatorLobbyBW.jpg'
            }
        ];

        this._sysMenu = [
            {
                label: this._getString('elevators', 'Elevators'),
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
                                label: this._getString('ez-shuttle', 'EXShuttle'),
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
                label: this._getString('escalators', 'Escalators'),
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
                label: this._getString('ezshuttle-dispatch', 'EZShuttle Dispatch'),
                icon: 'ezdispatch',
                routerLink: AppRoute.EZSHUTTLE_DISPATCH,
                items: [
                    {
                        label: this._getString('flex-nx', 'Flex - NX'),
                        routerLink: AppRoute.EZSHUTTLE_DISPATCH_FLEXNX
                    },
                    {
                        label: this._getString('ez-shuttle', 'EXShuttle'),
                        routerLink: AppRoute.EZSHUTTLE_DISPATCH_EZSHUTTLE
                    },
                ]
            },
            {
                label: this._getString('autowalks', 'Autowalks'),
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
        this._proMenu = [
            {
                label: this._getString('consultants', 'Consultants'),
                routerLink: AppRoute.CONSULTANTS
            },
            {
                label: this._getString('property-management-cos', 'Property Management Cos'),
                routerLink: AppRoute.PROPERTY_MANAGERS
            },
            {
                label: this._getString('architects-gcs', 'Architects & GCs'),
                routerLink: AppRoute.ARCHITECTS
            }
        ];

        this._updateSlidesSize();

        if (this._slides.length > 1) {
            this._intervalId = setInterval(() => {
                this._sliding = true;
                setTimeout(() => {
                    let s = this._slides.shift();
                    this._slides.push(s);
                    this._sliding = false;
                }, 1000);
            }, 5000);
        }
    }
    private _onResize(event: UIEvent): void {
        this._updateSlidesSize();
    }
    private _onSysMenuClick(item: MenuItem, event?: MouseEvent): void {
        super.onMenuClick(item, event);
        this._sysMenu.forEach((m) => {
            m.expanded = false;
        });
    }
    private _showSubMenu(items: MenuItem[]): void {
        if (items === null) {
            this._subMenu = [];
        } else {
            this._subMenu = items;
        }
    }
    private _updateSlidesSize(): void {
        const R = 1200 / 300;
        let r = this._slidesRect;

        this._slideWidth = r.width;
        this._slideHeight = Math.ceil(r.width / R);
    }
}
