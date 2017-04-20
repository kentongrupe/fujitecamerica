import {
    Routes
} from '@angular/router';
import {
    AboutComponent,
    ArchitectsComponent,
    AutowalksComponent,
    ConsultantsComponent,
    ContactComponent,
    DestinationControlComponent,
    ElevatorsComponent,
    EscalatorsComponent,
    HomeComponent,
    InstallationComponent,
    LocationsComponent,
    ModernizationComponent,
    PropertyManagersComponent,
    ServiceMaintenanceComponent
} from 'app/modules';
import {
    RouterService
} from 'app/services';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'autowalks', component: AutowalksComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'destination-control', component: DestinationControlComponent },
    { path: 'elevators', component: ElevatorsComponent },
    { path: 'escalators', component: EscalatorsComponent },
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
