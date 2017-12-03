export class AppRoute {
    public static ABOUT: string = '/about';
    public static ARCHITECTS: string = '/architects';
    public static AUTOWALKS: string = '/autowalks';
    public static AUTOWALKS_GS8100: string = '/autowalks/gs8100';
    public static AUTOWALKS_TYPE_F: string = '/autowalks/type-f';
    public static AUTOWALKS_TYPE_P: string = '/autowalks/type-p';
    public static AUTOWALKS_TYPE_S: string = '/autowalks/type-s';
    public static CONTACT: string = '/contact';
    public static CONSULTANTS: string = '/consultants';
    public static ELEVATORS: string = '/elevators';
    public static ELEVATORS_CONTROLLERS: string = '/elevators/controllers';
    public static ELEVATORS_CONTROLLERS_EZSHUTTLE: string = '/elevators/controllers/ezshuttle';
    public static ELEVATORS_CONTROLLERS_FLEXNX: string = '/elevators/controllers/flex-nx';
    public static ELEVATORS_CONTROLLERS_VIRIDIAN: string = '/elevators/controllers/viridian';
    public static ELEVATORS_IONFUL: string = '/elevators/ionful';
    public static ELEVATORS_MONITORING: string = '/elevators/monitoring';
    public static ELEVATORS_SYSTEMS: string = '/elevators/systems';
    public static ELEVATORS_SYSTEMS_GEARED: string = '/elevators/systems/geared';
    public static ELEVATORS_SYSTEMS_GEARLESS: string = '/elevators/systems/gearless';
    public static ELEVATORS_SYSTEMS_HYDRAULIC: string = '/elevators/systems/hydraulic';
    public static ELEVATORS_SYSTEMS_MRL: string = '/elevators/systems/mrl';
    public static ESCALATORS: string = '/escalators';
    public static ESCALATORS_GS8000: string = '/escalators/gs8000';
    public static ESCALATORS_TYPE_F: string = '/escalators/type-f';
    public static ESCALATORS_TYPE_P: string = '/escalators/type-p';
    public static ESCALATORS_TYPE_S: string = '/escalators/type-s';
    public static CONTROLS_DISPATCH: string = '/dispatch';
    public static CONTROLS_DISPATCH_EZSHUTTLE: string = '/dispatch/ezshuttle';
    public static CONTROLS_DISPATCH_FLEXNX: string = '/dispatch/flex-nx';
    public static HOME: string = '/home';
    public static INIT: string = '';
    public static INSTALLATION: string = '/installation';
    public static LOCATIONS: string = '/locations';
    public static MODERNIZATION: string = '/modernization';
    public static PRIVACY_POLICY: string = '/privacy-policy';
    public static PROJECTS: string = '/projects';
    public static PROJECTS_ADDITIONAL: string = '/projects/additional';
    public static PROPERTY_MANAGERS: string = '/property-managers';
    public static SEARCH: string = '/search';
    public static SERVICE_MAINTENANCE: string = '/service-maintenance';
    public static SITE_MAP: string = '/site-map';
    public static SITE_POLICY: string = '/site-policy';

    public static routes: any[] = [
        {
            path: AppRoute.INSTALLATION
        },
        {
            path: AppRoute.SERVICE_MAINTENANCE
        },
        {
            path: AppRoute.MODERNIZATION
        },
        {
            path: AppRoute.PROJECTS,
            children: [
                { path: AppRoute.PROJECTS_ADDITIONAL }
            ]
        },
        {
            path: AppRoute.ELEVATORS,
            children: [
                {
                    path: AppRoute.ELEVATORS_SYSTEMS,
                    children: [
                        { path: AppRoute.ELEVATORS_SYSTEMS_MRL },
                        { path: AppRoute.ELEVATORS_SYSTEMS_GEARED },
                        { path: AppRoute.ELEVATORS_SYSTEMS_GEARLESS },
                        { path: AppRoute.ELEVATORS_SYSTEMS_HYDRAULIC }
                    ]
                },
                {
                    path: AppRoute.ELEVATORS_CONTROLLERS,
                    children: [
                        { path: AppRoute.ELEVATORS_CONTROLLERS_VIRIDIAN },
                        { path: AppRoute.ELEVATORS_CONTROLLERS_FLEXNX },
                        { path: AppRoute.ELEVATORS_CONTROLLERS_EZSHUTTLE }
                    ]
                },
                { path: AppRoute.ELEVATORS_MONITORING },
                { path: AppRoute.ELEVATORS_IONFUL }
            ]
        },
        {
            path: AppRoute.CONTROLS_DISPATCH,
            children: [
                { path: AppRoute.CONTROLS_DISPATCH_FLEXNX },
                { path: AppRoute.CONTROLS_DISPATCH_EZSHUTTLE }
            ]
        },
        {
            path: AppRoute.CONSULTANTS
        },
        {
            path: AppRoute.PROPERTY_MANAGERS
        },
        {
            path: AppRoute.ARCHITECTS
        },
        {
            path: AppRoute.ABOUT
        },
        {
            path: AppRoute.LOCATIONS
        },
        {
            path: AppRoute.CONTACT
        },
        {
            path: AppRoute.PRIVACY_POLICY
        },
        {
            path: AppRoute.SITE_POLICY
        }
    ];
}
