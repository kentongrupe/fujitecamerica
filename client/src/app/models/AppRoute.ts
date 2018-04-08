export class AppRoute {
    public static ABOUT: string = '/about';
    public static ABOUT_ACHIEVEMENTS: string = '/about/achievements';
    public static ABOUT_CEO: string = '/about/ceo';
    public static ABOUT_HISTORY: string = '/about/history';
    public static ABOUT_LEADERSHIP: string = '/about/leadership';
    public static ABOUT_NORTH_AMERICA: string = '/about/northamerica';
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
    public static MAINTENANCE: string = '/maintenance';
    public static MAINTENANCE_MECHOANIC_ROUTES: string = '/maintenance/routes';
    public static MAINTENANCE_SERVICE_STATS: string = '/maintenance/stats';
    public static MAINTENANCE_WHY_FUJITEC: string = '/maintenance/whyfujitec';
    public static MODERNIZATION: string = '/modernization';
    public static MODERNIZATION_ASSESSMENT: string = '/modernization/assessment';
    public static MODERNIZATION_BENEFITS: string = '/modernization/benefits';
    public static MODERNIZATION_PROCESS: string = '/modernization/process';
    public static MODERNIZATION_WHY_NAMO: string = '/modernization/whynamo';
    public static PRIVACY_POLICY: string = '/privacy-policy';
    public static PORTFOLIO: string = '/portfolio';
    public static PORTFOLIO_ADDITIONAL: string = '/portfolio/additional';
    public static PROPERTY_MANAGERS: string = '/property-managers';
    public static RECOMMENDATIONS: string = '/recommendations';
    public static SEARCH: string = '/search';
    public static SITE_MAP: string = '/site-map';
    public static SITE_POLICY: string = '/site-policy';
    public static SUPPORT: string = '/support';

    public static routes: any[] = [
        {
            path: AppRoute.MAINTENANCE,
            children: [
                { path: AppRoute.MAINTENANCE_MECHOANIC_ROUTES },
                { path: AppRoute.MAINTENANCE_SERVICE_STATS },
                { path: AppRoute.MAINTENANCE_WHY_FUJITEC }
            ]
        },
        {
            path: AppRoute.MODERNIZATION
        },
        {
            path: AppRoute.INSTALLATION
        },
        {
            path: AppRoute.PORTFOLIO
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
