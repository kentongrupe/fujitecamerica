import {
    Routes
} from '@angular/router';
import {
    InitComponent,

    HomeComponent,                      // home

    ElevatorsComponent,                 // home > elevators
    SystemsComponent,                   // home > elevators > systems
    MRLComponent,                       // home > elevators > systems > mrl
    GearlessComponent,                  // home > elevators > systems > gearless
    GearedComponent,                    // home > elevators > systems > geared
    HydraulicComponent,                 // home > elevators > systems > hydraulic
    ControllersComponent,               // home > elevators > controllers
    ViridianComponent,                  // home > elevators > controllers > viridian
    ElevatorFlexNXComponent,            // home > elevators > controllers > flex nx
    ElevatorEZShuttleComponent,         // home > elevators > controllers > ezshuttle
    MonitoringComponent,                // home > elevators > monitoring
    IONFULComponent,                    // home > elevators > ionful

    EscalatorsComponent,                // home > escalators

    AutowalksComponent,                 // home > autowalks

    DispatchComponent,                  // home > ezshuttle dispatch
    DispatchFlexNXComponent,            // home > ezshuttle dispatch > flex nx
    DispatchEZShuttleComponent,         // home > ezshuttle dispatch > ezshuttle

    InstallationComponent,              // installation
    ServiceMaintenanceComponent,        // service & maintenance
    ModernizationComponent,             // modernization
    ProjectComponent,                   // project
    ProjectsComponent,                  // projects
    AboutComponent,                     // about
    LocationsComponent,                 // locations
    ContactComponent,                   // contact

    ArchitectsComponent,                // architects
    ConsultantsComponent,               // consultants
    PropertyManagersComponent,          // property managers

    SiteMapComponent,                   // site map
    PrivacyPolicyComponent,             // privacy policy
    SitePolicyComponent                 // site policy

} from 'app/modules';
import {
    RouterService
} from 'app/services';

export const ROUTES: Routes = [
    { path: '', component: InitComponent },
    { path: 'home', component: HomeComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'about', component: AboutComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'about/:product', component: AboutComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'autowalks', component: AutowalksComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'autowalks/:product', component: AutowalksComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'contact', component: ContactComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    {
        path: 'dispatch', component: DispatchComponent,
        canActivate: [RouterService],
        canActivateChild: [RouterService],
        children: [
            { path: 'ezshuttle', component: DispatchEZShuttleComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
            { path: 'flex-nx', component: DispatchFlexNXComponent, canActivate: [RouterService], canActivateChild: [RouterService] }
        ]
    },
    {
        path: 'elevators', component: ElevatorsComponent,
        canActivate: [RouterService],
        canActivateChild: [RouterService],
        children: [
            {
                path: 'controllers', component: ControllersComponent,
                canActivate: [RouterService],
                canActivateChild: [RouterService],
                children: [
                    { path: 'ezshuttle', component: ElevatorEZShuttleComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
                    { path: 'flex-nx', component: ElevatorFlexNXComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
                    { path: 'viridian', component: ViridianComponent, canActivate: [RouterService], canActivateChild: [RouterService] }
                ]
            },
            { path: 'ionful', component: IONFULComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
            { path: 'monitoring', component: MonitoringComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
            {
                path: 'systems', component: SystemsComponent,
                canActivate: [RouterService],
                canActivateChild: [RouterService],
                children: [
                    { path: 'geared', component: GearedComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
                    { path: 'gearless', component: GearlessComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
                    { path: 'hydraulic', component: HydraulicComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
                    { path: 'mrl', component: MRLComponent, canActivate: [RouterService], canActivateChild: [RouterService] }
                ]
            }
        ]
    },
    { path: 'escalators', component: EscalatorsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'escalators/:product', component: EscalatorsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'installation', component: InstallationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'installation/:product', component: InstallationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'locations', component: LocationsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'modernization', component: ModernizationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'modernization/:product', component: ModernizationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'project/:projectId', component: ProjectComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'projects', component: ProjectsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'service-maintenance', component: ServiceMaintenanceComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'service-maintenance/:product', component: ServiceMaintenanceComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'site-map', component: SiteMapComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'site-policy', component: SitePolicyComponent, canActivate: [RouterService], canActivateChild: [RouterService] },

    { path: 'architects', component: ArchitectsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'consultants', component: ConsultantsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'property-managers', component: PropertyManagersComponent, canActivate: [RouterService], canActivateChild: [RouterService] },

    { path: '**', component: HomeComponent }
];
