import {
    ElevatorsComponent
} from './elevators.component';

export const routes = [
    { path: '', component: ElevatorsComponent },
    { path: ':product', component: ElevatorsComponent }
];
