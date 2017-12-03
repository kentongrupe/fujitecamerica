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
    EscalatorsGS8000Component,          // home > escalators > gs8000
    EscalatorsTypePComponent,           // home > escalators > type-p
    EscalatorsTypeSComponent,           // home > escalators > type-s

    AutowalksComponent,                 // home > autowalks
    AutowalksTypeFComponent,            // home > autowalks > type-f
    AutowalksTypePComponent,            // home > autowalks > type-p
    AutowalksTypeSComponent,            // home > autowalks > type-s

    DispatchComponent,                  // home > ezshuttle dispatch
    DispatchFlexNXComponent,            // home > ezshuttle dispatch > flex nx
    DispatchEZShuttleComponent,         // home > ezshuttle dispatch > ezshuttle

    InstallationComponent,              // installation
    ServiceMaintenanceComponent,        // service & maintenance
    ModernizationComponent,             // modernization
    ProjectsComponent,                  // projects
    ProjectsAdditionalComponent,        // projects > additional
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
    AutowalksGS8100Component            // home > autowalks > gs8100
} from 'app/modules/autowalks/gs8100';
import {
    EscalatorsTypeFComponent            // home > escalators > type-f
} from 'app/modules/escalators/type-f';
import {
    RouterService
} from 'app/services';

export const ROUTES: Routes = [
    { path: '', component: InitComponent },
    { path: 'home', component: HomeComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'about', component: AboutComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'about/:product', component: AboutComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    {
        path: 'autowalks',
        component: AutowalksComponent,
        canActivate: [RouterService],
        canActivateChild: [RouterService],
        children: [
            { path: 'gs8100', component: AutowalksGS8100Component, canActivate: [RouterService], canActivateChild: [RouterService] },
            { path: 'type-f', component: AutowalksTypeFComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
            { path: 'type-p', component: AutowalksTypePComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
            { path: 'type-s', component: AutowalksTypeSComponent, canActivate: [RouterService], canActivateChild: [RouterService] }
        ]
    },


    { path: 'contact', component: ContactComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    {
        path: 'dispatch',
        component: DispatchComponent,
        canActivate: [RouterService],
        canActivateChild: [RouterService],
        children: [
            { path: 'ezshuttle', component: DispatchEZShuttleComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
            { path: 'flex-nx', component: DispatchFlexNXComponent, canActivate: [RouterService], canActivateChild: [RouterService] }
        ]
    },
    {
        path: 'elevators',
        component: ElevatorsComponent,
        canActivate: [RouterService],
        canActivateChild: [RouterService],
        children: [
            {
                path: 'controllers',
                component: ControllersComponent,
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
                path: 'systems',
                component: SystemsComponent,
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
    {
        path: 'escalators',
        component: EscalatorsComponent,
        canActivate: [RouterService],
        canActivateChild: [RouterService],
        children: [
            { path: 'gs8000', component: EscalatorsGS8000Component, canActivate: [RouterService], canActivateChild: [RouterService] },
            { path: 'type-f', component: EscalatorsTypeFComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
            { path: 'type-p', component: EscalatorsTypePComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
            { path: 'type-s', component: EscalatorsTypeSComponent, canActivate: [RouterService], canActivateChild: [RouterService] }
        ]
    },
    { path: 'installation', component: InstallationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'installation/:product', component: InstallationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'locations', component: LocationsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'modernization', component: ModernizationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'modernization/:product', component: ModernizationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'projects', component: ProjectsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'projects/additional', component: ProjectsAdditionalComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'service-maintenance', component: ServiceMaintenanceComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'service-maintenance/:product', component: ServiceMaintenanceComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'site-map', component: SiteMapComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'site-policy', component: SitePolicyComponent, canActivate: [RouterService], canActivateChild: [RouterService] },

    { path: 'architects', component: ArchitectsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'consultants', component: ConsultantsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'property-managers', component: PropertyManagersComponent, canActivate: [RouterService], canActivateChild: [RouterService] },

    { path: '**', component: HomeComponent }
];
