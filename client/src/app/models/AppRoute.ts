export class AppRoute {
    public static ABOUT: string = '/about';
    public static ARCHITECTS: string = '/architects';
    public static AUTOWALKS: string = '/autowalks';
    public static AUTOWALKS_TYPE_F: string = '/autowalks/typef';
    public static AUTOWALKS_TYPE_P: string = '/autowalks/typep';
    public static AUTOWALKS_TYPE_S: string = '/autowalks/types';
    public static CONTACT: string = '/contact';
    public static CONSULTANTS: string = '/consultants';
    public static DISPATCH: string = '/dispatch';
    public static DISPATCH_EZSHUTTLE: string = '/dispatch/ezshuttle';
    public static DISPATCH_FLEXNX: string = '/dispatch/flexnx';
    public static ELEVATORS: string = '/elevators';
    public static ELEVATORS_GEARED: string = '/elevators/geared';
    public static ELEVATORS_GEARLESS: string = '/elevators/gearless';
    public static ELEVATORS_HYDRAULIC: string = '/elevators/hydraulic';
    public static ELEVATORS_IONFUL: string = '/elevators/ionful';
    public static ELEVATORS_MONITORING: string = '/elevators/monitoring';
    public static ELEVATORS_MRL: string = '/elevators/mrl';
    public static ESCALATORS: string = '/escalators';
    public static ESCALATORS_TYPE_F: string = '/escalators/typef';
    public static ESCALATORS_TYPE_P: string = '/escalators/typep';
    public static ESCALATORS_TYPE_S: string = '/escalators/types';
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
    public static SUPPORT: string = '/support';

    public static routes: any[] = [
        {
            path: AppRoute.SERVICE_MAINTENANCE
        },
        {
            path: AppRoute.MODERNIZATION
        },
        {
            path: AppRoute.INSTALLATION
        },
        {
            path: AppRoute.PROJECTS,
            children: [
                { path: AppRoute.PROJECTS_ADDITIONAL }
            ]
        },
        {
            path: AppRoute.SUPPORT
        },
        {
            path: AppRoute.ELEVATORS,
            children: [
                { path: AppRoute.ELEVATORS_MRL },
                { path: AppRoute.ELEVATORS_GEARED },
                { path: AppRoute.ELEVATORS_GEARLESS },
                { path: AppRoute.ELEVATORS_HYDRAULIC },
                { path: AppRoute.ELEVATORS_MONITORING },
                { path: AppRoute.ELEVATORS_IONFUL }
            ]
        },
        {
            path: AppRoute.ESCALATORS,
            children: [
                { path: AppRoute.ESCALATORS_TYPE_S },
                { path: AppRoute.ESCALATORS_TYPE_F },
                { path: AppRoute.ESCALATORS_TYPE_P }
            ]
        },
        {
            path: AppRoute.DISPATCH,
            children: [
                { path: AppRoute.DISPATCH_FLEXNX },
                { path: AppRoute.DISPATCH_EZSHUTTLE }
            ]
        },
        {
            path: AppRoute.AUTOWALKS,
            children: [
                { path: AppRoute.AUTOWALKS_TYPE_S },
                { path: AppRoute.AUTOWALKS_TYPE_F },
                { path: AppRoute.AUTOWALKS_TYPE_P }
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
