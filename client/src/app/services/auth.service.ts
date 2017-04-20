import {
    Injectable
} from '@angular/core';
import {
    BaseService
} from 'app/core';
import {
    User,
    UserRole
} from 'app/models';

@Injectable()
export class AuthenticationService extends BaseService {

    public currentUser: User = null;

    public get isLoggedIn(): boolean {
        return ((this.currentUser !== undefined) && (this.currentUser !== null));
    }
    constructor(
        // private dataService: DataService,
    ) {
        super('AuthenticationService');
    }

    public login(username: string, password: string, onSuccess: Function = null, onError: Function = null): void {
        this.currentUser = new User({
            userRole: UserRole.CONSULTANT
        });
        if (onSuccess) {
            onSuccess(this.currentUser);
        }
    }
}
