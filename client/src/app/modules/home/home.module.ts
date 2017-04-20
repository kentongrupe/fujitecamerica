import {
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import {
    HomeComponent
} from './home.component';
import {
    FujitecSharedModule
} from 'app/modules';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        FujitecSharedModule
    ],
    providers: [],
    bootstrap: [
        HomeComponent
    ],
    entryComponents: [],
    schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
