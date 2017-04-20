import {
    Routes
} from '@angular/router';
import {
    LoginComponent
} from './modules';

export const ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: '**', component: LoginComponent },
];
