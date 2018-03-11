import {
    DispatchComponent
} from './dispatch.component';

export const routes = [
    { path: '', component: DispatchComponent },
    { path: ':product', component: DispatchComponent }
];
