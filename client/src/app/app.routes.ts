import {
    Routes
} from '@angular/router';
import {
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

    DestinationControlComponent,        // home > destination control
    DestinationFlexNXComponent,         // home > destination control > flex nx
    DestinationEZShuttleComponent,      // home > destination control > ezshuttle

    InstallationComponent,              // installation
    ServiceMaintenanceComponent,        // service & maintenance
    ModernizationComponent,             // modernization
    AboutComponent,                     // about
    LocationsComponent,                 // locations
    ContactComponent,                   // contact

    ArchitectsComponent,                // architects
    ConsultantsComponent,               // consultants
    PropertyManagersComponent           // property managers

} from 'app/modules';
import {
    RouterService
} from 'app/services';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'autowalks', component: AutowalksComponent },
    { path: 'autowalks/:product', component: AutowalksComponent },
    { path: 'contact', component: ContactComponent },
    {
        path: 'destination-control', component: DestinationControlComponent,
        children: [
            { path: 'ezshuttle', component: DestinationEZShuttleComponent },
            { path: 'flex-nx', component: DestinationFlexNXComponent }
        ]
    },
    {
        path: 'elevators', component: ElevatorsComponent,
        children: [
            {
                path: 'controllers', component: ControllersComponent,
                children: [
                    { path: 'ezshuttle', component: ElevatorEZShuttleComponent },
                    { path: 'flex-nx', component: ElevatorFlexNXComponent },
                    { path: 'viridian', component: ViridianComponent }
                ]
            },
            { path: 'ionful', component: IONFULComponent },
            { path: 'monitoring', component: MonitoringComponent },
            {
                path: 'systems', component: SystemsComponent,
                children: [
                    { path: 'geared', component: GearedComponent },
                    { path: 'gearless', component: GearlessComponent },
                    { path: 'hydraulic', component: HydraulicComponent },
                    { path: 'mrl', component: MRLComponent }
                ]
            },
        ]
    },
    { path: 'escalators', component: EscalatorsComponent },
    { path: 'escalators/:product', component: EscalatorsComponent },
    { path: 'installation', component: InstallationComponent },
    { path: 'installation/:product', component: InstallationComponent },
    { path: 'locations', component: LocationsComponent },
    { path: 'modernization', component: ModernizationComponent },
    { path: 'modernization/:product', component: ModernizationComponent },
    { path: 'service-maintenance', component: ServiceMaintenanceComponent },
    { path: 'service-maintenance/:product', component: ServiceMaintenanceComponent },

    { path: 'architects', component: ArchitectsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'consultants', component: ConsultantsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'property-managers', component: PropertyManagersComponent, canActivate: [RouterService], canActivateChild: [RouterService] },

    { path: '**', component: HomeComponent }
];
