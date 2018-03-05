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
    AlertModal,
    LoginModal
} from 'app/modals';
import {
    AppEvent,
    AppRoute,
    User,
    UserRole
} from 'app/models';
import {
    AuthenticationService
} from './auth.service';
import {
    EventService
} from './event.service';
import {
    StringService
} from './string.service';

@Injectable()
export class RouterService extends BaseService implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthenticationService,
        private eventService: EventService,
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
        this.router.navigate(['{0}'.format(location)].concat(args));
        this.eventService.dispatch(AppEvent.SHOW_HEADER);
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
