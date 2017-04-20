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
    BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
    RouterModule
} from '@angular/router';
import {
    MaterialModule
} from '@angular/material';
import 'hammerjs';
import {
    LoginModal
} from 'app/modals';
import {
    FormatStringPipe,
    GetStringPipe
} from 'app/pipes';

@NgModule({
    declarations: [
        // modals
        LoginModal,
        // pipes
        FormatStringPipe,
        GetStringPipe
    ],
    imports: [
        // ng2
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        RouterModule,

        // material2
        MaterialModule.forRoot(),
    ],
    exports: [
        // ng2
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        RouterModule,

        // material2
        MaterialModule,

        // modals
        LoginModal,
        // pipes
        FormatStringPipe,
        GetStringPipe
    ],
    providers: [],
    entryComponents: [
        LoginModal
    ]
})
export class FujitecSharedModule { }
