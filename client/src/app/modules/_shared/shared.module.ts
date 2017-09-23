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
    ClarityModule
} from 'clarity-angular';
import 'hammerjs';
import {
    IFrameComponent,
    MenuComponent,
    ProMenuComponent,
    SysMenuComponent,
} from 'app/components';
import {
    SectionHeaderComponent
} from 'app/components/section-header';
import {
    AlertModal,
    LoginModal,
    ProjectInfoModal
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
        SectionHeaderComponent,
        SysMenuComponent,
        // modals
        AlertModal,
        LoginModal,
        ProjectInfoModal,
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

        // clarity
        ClarityModule
    ],
    exports: [
        // ng2
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        RouterModule,

        // clarity
        ClarityModule,

        // components
        IFrameComponent,
        MenuComponent,
        ProMenuComponent,
        SectionHeaderComponent,
        SysMenuComponent,
        // modals
        AlertModal,
        LoginModal,
        ProjectInfoModal,
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
