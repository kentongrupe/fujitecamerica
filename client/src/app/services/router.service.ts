import {
    Injectable
} from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    DetachedRouteHandle,
    RouterStateSnapshot,
    RouteReuseStrategy,
    Router
} from '@angular/router';
import {
    BaseService
} from 'app/core';
import {
    AppRoute, AppEvent
} from 'app/models';
import {
    StringService
} from './string.service';

@Injectable()
export class RouterService extends BaseService implements CanActivate, CanActivateChild {

    constructor(
        private router: Router,
        private stringService: StringService
    ) {
        super('RouterService');
        this._stringService = stringService;
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this._canActivate(route, state);
    }
    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this._canActivate(route, state);
    }
    public to(location: string, ...args): boolean {
        let l = location.toLowerCase();
        if (this.router.url === l) {
            return false;
        }
        this.router.navigate([location].concat(args));
        return true;
    }
    public toUrl(url: string, forceHttps: boolean = false, newWindow: boolean = false): void {
        if (forceHttps === true) {
            url = url.replace(/^http:\/\//i, 'https://');
        }
        if (url.length > 0) {
            if (newWindow) {
                window.open(url);
            } else {
                window.location.assign(url);
            }
        }
    }
    private _canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.stringService.hasStrings) {
            this.to(AppRoute.INIT);
            return false;
        }
        return true;
    }
}
