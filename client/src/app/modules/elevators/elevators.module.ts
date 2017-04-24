import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    FujitecSharedModule
} from 'app/modules';
import {
    ElevatorsComponent,                 // home > elevators
    SystemsComponent,                   // home > elevators > systems
    MRLComponent,                       // home > elevators > systems > mrl
    GearlessComponent,                  // home > elevators > systems > gearless
    GearedComponent,                    // home > elevators > systems > geared
    HydraulicComponent,                 // home > elevators > systems > hydraulic
    ControllersComponent,               // home > elevators > controllers
    ViridianComponent,                  // home > elevators > controllers > viridian
    ElevatorFlexNXComponent,            // home > elevators > controllers > flex-nx
    ElevatorEZShuttleComponent,         // home > elevators > controllers > ezshuttle
    MonitoringComponent,                // home > elevators > monitoring
    IONFULComponent                     // home > elevators > ionful
} from './';

@NgModule({
    declarations: [
        ElevatorsComponent,                 // home > elevators
        SystemsComponent,                   // home > elevators > systems
        MRLComponent,                       // home > elevators > systems > mrl
        GearlessComponent,                  // home > elevators > systems > gearless
        GearedComponent,                    // home > elevators > systems > geared
        HydraulicComponent,                 // home > elevators > systems > hydraulic
        ControllersComponent,               // home > elevators > controllers
        ViridianComponent,                  // home > elevators > controllers > viridian
        ElevatorFlexNXComponent,            // home > elevators > controllers > flex-nx
        ElevatorEZShuttleComponent,         // home > elevators > controllers > ezshuttle
        MonitoringComponent,                // home > elevators > monitoring
        IONFULComponent                     // home > elevators > ionful
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        ElevatorsComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ElevatorsModule { }
