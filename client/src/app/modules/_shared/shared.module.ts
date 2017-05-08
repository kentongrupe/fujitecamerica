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
    IFrameComponent,
    MenuComponent,
    ProMenuComponent,
    SysMenuComponent
} from 'app/components';
import {
    AlertModal,
    LoginModal
} from 'app/modals';
import {
    FormatStringPipe,
    GetStringPipe
} from 'app/pipes';

@NgModule({
    declarations: [
        // components
        IFrameComponent,
        MenuComponent,
        ProMenuComponent,
        SysMenuComponent,
        // modals
        AlertModal,
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

        // components
        IFrameComponent,
        MenuComponent,
        ProMenuComponent,
        SysMenuComponent,
        // modals
        AlertModal,
        LoginModal,
        // pipes
        FormatStringPipe,
        GetStringPipe
    ],
    providers: [],
    entryComponents: [
        AlertModal,
        LoginModal
    ]
})
export class FujitecSharedModule { }
