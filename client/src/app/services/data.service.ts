import {
    Injectable
} from '@angular/core';
import {
    Headers,
    Http,
    RequestOptions,
    Response,
    URLSearchParams
} from '@angular/http';
import {
    BaseService
} from 'app/core';
import {
    User,
    UserRole
} from 'app/models';
import {
    StringService
} from './string.service';

@Injectable()
export class DataService extends BaseService {

    private _baseUrl: string = ''; // 'http://fujitecamerica.com';

    constructor(
        private http: Http,
        private stringService: StringService
    ) {
        super('DataService');
        this._stringService = stringService;
    }

    public login(username: string, password: string, onSuccess: Function = null, onError: Function = null): void {
        if (username === password) {
            onError('invalid username and/or password');
        } else {
            onSuccess({
                username,
                userRole: UserRole.ARCHITECT
            });
        }
        // let params = {
        //     username,
        //     password
        // };
        // this._post('login', params, onSuccess, onError);
    }
    public get(path: string, onSuccess: Function = null, onError: Function = null): void {
        this._get(path, onSuccess, onError);
    }
    public getNodeHtml(node: string, onSuccess: Function = null, onError: Function = null): void {
        let n = 'node/{0}'.format(node);
        this._get(n, onSuccess, onError);
    }
    private _get(name: string, onSuccess: Function = null, onError: Function = null): void {
        let url = '{0}/{1}'.format(this._baseUrl, name);
        let options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });

        (this.http
            .get(url, options)
            .map((res) => {
                return res.text();
            }))
            .subscribe((result: string) => {
                // this._parseResult(result, (d) => {
                // });
                if (onSuccess) {
                    onSuccess(result);
                }
            }, (error) => {
                if (onError) {
                    onError(error);
                } else {
                    console.error(error);
                }
            });
    }
    private _post(name: string, params: any = {}, onSuccess: Function = null, onError: Function = null): void {
        let url = '{0}/{1}'.format(this._baseUrl, name);
        let options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        });
        let body = new URLSearchParams();
        if (params !== null) {
            Object.keys(params).forEach((key) => {
                body.set(key, params[key]);
            });
        }

        (this.http
            .post(url, body.toString(), options)
            .map((res) => {
                return res.text();
            }))
            .subscribe((result: string) => {
                // this._parseResult(result, (d) => {
                //     if ((d.showLogin !== undefined) && (this.parseBoolean(d.showLogin) === true)) {
                //         this._showLogin();
                //     } else if (onSuccess) {
                //         onSuccess(d);
                //     }
                // });
                if (onSuccess) {
                    onSuccess(result);
                }
            }, (error) => {
                if (onError) {
                    onError(error);
                } else {
                    console.error(error);
                }
            });
    }

    // private _parseResult(result: string, callback: Function): void {
    //     Utils.parseXML(result, (d) => {
    //         if (this.isDev) {
    //             console.log(d);
    //         }
    //         if (callback) {
    //             callback(d);
    //         }
    //     });
    // }
}
