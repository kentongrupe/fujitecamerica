import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    FormsModule
} from '@angular/forms';
import {
    RouterModule
} from '@angular/router';
// clarity...
import {
    ClarityModule
} from 'clarity-angular';
// ...clarity

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,

        // clarity
        ClarityModule.forRoot()
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,

        // clarity
        ClarityModule
    ],
    providers: [],
    entryComponents: []
})
export class FujitecSharedModule { }
