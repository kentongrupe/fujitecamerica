// Angular 2
import {
    enableDebugTools,
    disableDebugTools
} from '@angular/platform-browser';
import {
    ApplicationRef,
    enableProdMode
} from '@angular/core';
import {
    Headers,
    Http,
    RequestOptions
} from '@angular/http';
import {
    StringService
} from 'app/services';

declare const $;

// Environment Providers
let PROVIDERS: any[] = [
    // common env directives
];

// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
let _decorateModuleRef = <T>(value: T): T => { return value; };

let loginInfo = null;
let s = window.location.search;
if ((s !== undefined) && (s !== null) && (s.replace(' ', '').length > 0) && (s.startsWith('?'))) {
    s.substr(1).split('&').forEach((x) => {
        let a = x.split('=');
        if (a[0].toLowerCase() === 'locale') {
            StringService.locale = a[1];
        }
    });
} else {
    StringService.locale = 'en'; // navigator.language;
}

$.getJSON(
    '/assets/locales/{0}/_strings.json'.format(StringService.locale),
    (data) => {
        let m = new Map<string, string>();
        for (let n in data) {
            if (data[n]) {
                m.set(n, data[n]);
            }
        }
        StringService.data = m;
    }
)

enableProdMode();

if ('production' === ENV) {

    // Production
    _decorateModuleRef = (modRef: any) => {
        disableDebugTools();

        return modRef;
    };

    PROVIDERS = [
        ...PROVIDERS,
        // custom providers in production
    ];

} else {

    _decorateModuleRef = (modRef: any) => {
        const appRef = modRef.injector.get(ApplicationRef);
        const cmpRef = appRef.components[0];

        let _ng = (window as any).ng;
        enableDebugTools(cmpRef);
        (window as any).ng.probe = _ng.probe;
        (window as any).ng.coreTokens = _ng.coreTokens;
        return modRef;
    };

    // Development
    PROVIDERS = [
        ...PROVIDERS,
        // custom providers in development
    ];

}

export const decorateModuleRef = _decorateModuleRef;

export const ENV_PROVIDERS = [
    ...PROVIDERS
];
