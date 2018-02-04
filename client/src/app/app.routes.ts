import {
    Routes
} from '@angular/router';
import {
    InitComponent,

    HomeComponent,

    ElevatorsComponent,
    EscalatorsComponent,
    DispatchComponent,
    AutowalksComponent,

    InstallationComponent,
    ServiceMaintenanceComponent,
    ModernizationComponent,
    PortfolioComponent,
    ProjectsAdditionalComponent,
    SupportComponent,

    AboutComponent,
    LocationsComponent,
    ContactComponent,

    ArchitectsComponent,
    ConsultantsComponent,
    PropertyManagersComponent,

    SiteMapComponent,
    PrivacyPolicyComponent,
    SitePolicyComponent

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
    { path: 'dispatch', component: DispatchComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'dispatch/:product', component: DispatchComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'elevators', component: ElevatorsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'elevators/:product', component: ElevatorsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'escalators', component: EscalatorsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'escalators/:product', component: EscalatorsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'installation', component: InstallationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'installation/:product', component: InstallationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'locations', component: LocationsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'modernization', component: ModernizationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'modernization/:product', component: ModernizationComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'privacy-policy', component: PrivacyPolicyComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'portfolio', component: PortfolioComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'portfolio/additional', component: ProjectsAdditionalComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'service-maintenance', component: ServiceMaintenanceComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'service-maintenance/:product', component: ServiceMaintenanceComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'site-map', component: SiteMapComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'site-policy', component: SitePolicyComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'support', component: SupportComponent, canActivate: [RouterService], canActivateChild: [RouterService] },

    { path: 'architects', component: ArchitectsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'consultants', component: ConsultantsComponent, canActivate: [RouterService], canActivateChild: [RouterService] },
    { path: 'property-managers', component: PropertyManagersComponent, canActivate: [RouterService], canActivateChild: [RouterService] },

    { path: '**', component: HomeComponent }
];
