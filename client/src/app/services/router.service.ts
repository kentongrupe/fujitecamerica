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
    AppRoute,
    User,
    UserRole
} from 'app/models';
import {
    AuthenticationService
} from './auth.service';
import {
    StringService
} from './string.service';

@Injectable()
export class RouterService extends BaseService implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthenticationService,
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
        let path = route.url[0].path;
        let routePaath = '/{0}'.format(path);
        if (['architects', 'consultants', 'property-managers'].includes(path)) {

            let _checkUserRole = (userRole) => {
                let isValidUser = false;
                switch (userRole) {
                    case UserRole.ARCHITECT:
                        isValidUser = (routePaath === AppRoute.ARCHITECTS);
                        break;
                    case UserRole.CONSULTANT:
                        isValidUser = (routePaath === AppRoute.CONSULTANTS);
                        break;
                    case UserRole.PROPERTY_MANAGER:
                        isValidUser = (routePaath === AppRoute.PROPERTY_MANAGERS);
                        break;
                    default:
                        break;
                }
                return isValidUser;
            };
            let _showAlert = () => {
                // let a = this.dialog.open(AlertModal);
                // a.componentInstance.message = this._getString('invalid-user-role-for-n', 'invalid user role for {0}').format(path);
            };

            if (this.authService.isLoggedIn) {
                if (_checkUserRole(this.authService.currentUser.userRole)) {
                    return true;
                } else {
                    _showAlert();
                    return false;
                }
            }
            // let l = this.dialog.open(LoginModal);
            // l.afterClosed().subscribe((user) => {
            //     if (_checkUserRole(user.userRole)) {
            //         this.to(routePaath);
            //     } else {
            //         _showAlert();
            //         return false;
            //     }
            // });
            return false;
        }
        return true;
    }
}
