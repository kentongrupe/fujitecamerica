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
    Project,
    User,
    UserRole
} from 'app/models';
import {
    StringService
} from './string.service';

@Injectable()
export class DataService extends BaseService {

    private _baseUrl: string = ''; // 'http://fujitecamerica.com';
    private _projects: Map<number, Project> = new Map<number, Project>();

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
    public getProject(params: any, onSuccess: Function = null, onError: Function = null): void {
        let id = params.projectId;
        if (this._projects.has(id)) {
            onSuccess(this._projects.get(id));
            return;
        }
        let p = new Project({
            name: params.projectId
        });
        this._projects.set(id, p);
        onSuccess(p);
    }
    public getProjects(params: any, onSuccess: Function = null, onError: Function = null): void {
        if (onSuccess) {
            let _z = () => {
                let c = ['Elevator', 'Residence', 'Commercial Facilitiy', 'Hotel', 'Residence', 'Office', 'Transportation', 'Moving Walk'];
                let n = Math.max(3, Math.round(Math.random() * 4));
                let z = [];
                for (let i = 0; i < 10; i++) {
                    z.push(new Project({
                        name: 'project ' + i,
                        description: 'Twelve Fujitec elevators are installed in VIA 57 West, an approximately 140m high residential building on the waterfront of the Hudson River ･･･ ',
                        imageUrl: 'http://www.fujitec.com/common/fjhp/doc/top_global/document/project/1704/via57west_view.jpg',
                        categories: ((nn) => {
                            let a = [];
                            for (let j = 0; j < nn; j++) {
                                a.push(c[Math.round(Math.random() * c.length)]);
                            }
                            return a;
                        })(n),
                        projectId: Math.round(Math.random() * 1000)
                    }));
                }
                return z;
            };
            onSuccess({
                projects: [
                    new Project({
                        name: 'North America',
                        projects: [
                            new Project({
                                name: 'Service & Maintenance',
                                projects: _z()
                            }),
                            new Project({
                                name: 'Modernization',
                                projects: _z()
                            }),
                            new Project({
                                name: 'Installation',
                                projects: _z()
                            })
                        ]
                    }),
                    new Project({
                        name: 'Global',
                        projects: _z()
                    }),
                ]
            });
        }
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
