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
    MdDialog
} from '@angular/material';
import {
    BaseService
} from 'app/core';
import {
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

@Injectable()
export class RouterService extends BaseService implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthenticationService,
        private dialog: MdDialog,
        private router: Router
    ) {
        super('RouterService');
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this._canActivate(route, state);
    }
    public canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this._canActivate(route, state);
    }
    public to(location: string, ...args): void {
        let l = location.toLowerCase();
        this.router.navigate(['{0}'.format(location)].concat(args));
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
        if (this.authService.isLoggedIn) {
            return true;
        }
        let dialogRef = this.dialog.open(LoginModal);
        dialogRef.afterClosed().subscribe((result) => {
            let m = dialogRef.componentInstance as LoginModal;
            let u = m.username;
            let p = m.password;
            // TODO: verify user
            // console.log(m.username, m.password);
            // console.log(route.url[0].path);
            this.authService.login(u, p, (user: User) => {
                let path = '/{0}'.format(route.url[0].path);
                let isValidUser = false;
                switch (user.userRole) {
                    case UserRole.ARCHITECT:
                        isValidUser = (path === AppRoute.ARCHITECTS);
                        break;
                    case UserRole.CONSULTANT:
                        isValidUser = (path === AppRoute.CONSULTANTS);
                        break;
                    case UserRole.PROPERTY_MANAGER:
                        isValidUser = (path === AppRoute.PROPERTY_MANAGERS);
                        break;
                    default:
                        break;
                }
                if (isValidUser) {
                    this.to(path);
                } else {
                    // TODO: show error message
                    console.error('invalid user');
                    this.to(AppRoute.HOME);
                }
            });
        });
        return false;
    }
}
