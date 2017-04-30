export class AppRoute {
    public static ABOUT: string = '/about';
    public static ARCHITECTS: string = '/architects';
    public static AUTOWALKS: string = '/autowalks';
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
    public static EZSHUTTLE_DISPATCH: string = '/dispatch';
    public static EZSHUTTLE_DISPATCH_EZSHUTTLE: string = '/dispatch/ezshuttle';
    public static EZSHUTTLE_DISPATCH_FLEXNX: string = '/dispatch/flex-nx';
    public static HOME: string = '/home';
    public static INIT: string = '';
    public static INSTALLATION: string = '/installation';
    public static INSTALLATION_AUTOWALKS: string = '/installation/autowalks';
    public static INSTALLATION_ELEVATORS: string = '/installation/elevators';
    public static INSTALLATION_ESCALATORS: string = '/installation/escalators';
    public static LOCATIONS: string = '/locations';
    public static MODERNIZATION: string = '/modernization';
    public static MODERNIZATION_AUTOWALKS: string = '/modernization/autowalks';
    public static MODERNIZATION_ELEVATORS: string = '/modernization/elevators';
    public static MODERNIZATION_ESCALATORS: string = '/modernization/escalators';
    public static PRIVACY_POLICY: string = '/privacy-policy';
    public static PROPERTY_MANAGERS: string = '/property-managers';
    public static SEARCH: string = '/search';
    public static SERVICE_MAINTENANCE: string = '/service-maintenance';
    public static SERVICE_MAINTENANCE_AUTOWALKS: string = '/service-maintenance/autowalks';
    public static SERVICE_MAINTENANCE_ELEVATORS: string = '/service-maintenance/elevators';
    public static SERVICE_MAINTENANCE_ESCALATORS: string = '/service-maintenance/escalators';
    public static SERVICE_MAINTENANCE_FOREIGN: string = '/service-maintenance/foreign';
    public static SITE_MAP: string = '/site-map';
    public static SITE_POLICY: string = '/site-policy';

    public static routes: any[] = [
        {
            path: AppRoute.INSTALLATION,
            children: [
                { path: AppRoute.INSTALLATION_ELEVATORS },
                { path: AppRoute.INSTALLATION_ESCALATORS },
                { path: AppRoute.INSTALLATION_AUTOWALKS }
            ]
        },
        {
            path: AppRoute.SERVICE_MAINTENANCE,
            children: [
                { path: AppRoute.SERVICE_MAINTENANCE_ELEVATORS },
                { path: AppRoute.SERVICE_MAINTENANCE_ESCALATORS },
                { path: AppRoute.SERVICE_MAINTENANCE_AUTOWALKS }
            ]
        },
        {
            path: AppRoute.MODERNIZATION,
            children: [
                { path: AppRoute.MODERNIZATION_ELEVATORS },
                { path: AppRoute.MODERNIZATION_ESCALATORS },
                { path: AppRoute.MODERNIZATION_AUTOWALKS }
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
            path: AppRoute.EZSHUTTLE_DISPATCH,
            children: [
                { path: AppRoute.EZSHUTTLE_DISPATCH_FLEXNX },
                { path: AppRoute.EZSHUTTLE_DISPATCH_EZSHUTTLE }
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
