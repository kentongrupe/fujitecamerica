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
    private _projects: Map<number, any> = new Map<number, any>();

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
    public getHtml(url: string, onSuccess: Function = null, onError: Function = null): void {
        this._get(url, onSuccess, onError);
    }
    public getLeaderships(onSuccess: Function = null, onError: Function = null): void {
        this._get('data/leaderships/leaderships.json', onSuccess, onError);
    }
    public getLocations(onSuccess: Function = null, onError: Function = null): void {
        this._get('data/locations/locations.json', onSuccess, onError);
    }
    public getNodeHtml(node: string, onSuccess: Function = null, onError: Function = null): void {
        let n = 'node/{0}'.format(node);
        this._get(n, onSuccess, onError);
    }
    public getProject(params: any, onSuccess: Function = null, onError: Function = null): void {
        let id = params.projectId;
        if (!this._projects.has(id)) {
            let p: any = {
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquet consequat odio. Ut accumsan maximus turpis, ut vestibulum massa dictum vitae. Nunc vel dui et eros ornare lacinia. Pellentesque at purus ac purus elementum dapibus eget at est. Aliquam feugiat, turpis id tempor interdum, orci tortor posuere neque, et luctus metus lacus id orci. Sed imperdiet dui sit amet fermentum ornare. Maecenas urna orci, tristique a iaculis sit amet, facilisis vel neque. Etiam vel molestie enim, sed congue est. Cras sapien enim, sagittis at accumsan ac, mollis vitae massa. Fusce urna massa, rhoncus sed malesuada ac, porttitor lobortis ipsum. Nullam bibendum et dui eget suscipit. Nam pulvinar, tellus ut tristique pharetra, nunc mauris mollis erat, sed tempor dui magna at enim. Vestibulum et magna et sem mattis dictum. Mauris tempor sapien et nisi vulputate elementum. Suspendisse id condimentum velit. Nunc accumsan lacinia lacus id ornare. Curabitur blandit dignissim ex id condimentum. Etiam rhoncus semper erat sed egestas. Quisque sed sapien non elit rhoncus maximus vitae non ante. Proin sit amet augue gravida, consequat massa in, ultricies felis. Quisque velit sapien, ultrices ut mi sed, tempor bibendum mauris. Nullam ultricies congue purus, in congue massa pretium ac. Duis id aliquet lorem, ut faucibus sapien. Curabitur suscipit felis non tempus aliquam. Sed vitae eros sagittis, dictum mauris vitae, laoreet ligula. Vestibulum porta felis ut sapien luctus, vitae congue odio sodales. Sed porta enim magna. Morbi vitae ante sem. Cras condimentum volutpat tellus non scelerisque. Aenean consectetur dui eget sapien ultrices luctus. Ut elementum feugiat felis, nec vehicula diam imperdiet ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque feugiat felis id neque hendrerit dictum. Quisque volutpat fringilla purus ultricies dapibus. Aliquam ut facilisis urna. Quisque in commodo risus, sit amet ultrices est. Morbi malesuada purus et rutrum faucibus. Suspendisse volutpat finibus lorem, id auctor velit viverra sed. Maecenas fringilla odio in ligula dictum facilisis. Nullam eget ex lectus. Sed gravida felis eu elit elementum, et lacinia leo tempor. Integer eu vehicula orci. Fusce id quam ligula. Sed euismod quam nulla, sed malesuada orci tempus ut. Morbi feugiat porttitor sapien. Sed finibus est vel lectus feugiat, aliquet sollicitudin mauris sodales. Sed non laoreet turpis. Pellentesque vel molestie elit. Nullam dolor magna, convallis id ex congue, imperdiet tempor enim. Donec condimentum nibh turpis, sed gravida libero imperdiet eget. Duis porta auctor justo, ut pretium risus lobortis eu. Pellentesque metus justo, auctor quis pellentesque a, commodo id mauris. Morbi blandit urna non dolor porttitor eleifend. Nullam a tincidunt enim.',
                equipment: 'some equipment',
                name: id,
                units: 123
            };
            this._projects.set(id, p);
        }
        onSuccess(this._projects.get(id));
    }
    public getProjects(onSuccess: Function = null, onError: Function = null): void {
        this._get('data/projects/projects.json', onSuccess, onError);
    }
    public getSlides(onSuccess: Function = null, onError: Function = null): void {
        this._get('data/slides/slides.json', onSuccess, onError);
    }
    public getTestimonials(onSuccess: Function = null, onError: Function = null): void {
        this._get('data/testimonials.json', onSuccess, onError);
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
            .subscribe((data) => {
                if (onSuccess) {
                    if (url.endsWith('.html')) {
                        onSuccess(data.text());
                    } else {
                        onSuccess(data.json());
                    }
                }
            }, (error) => {
                if (onError) {
                    onError(error);
                } else {
                    console.error(error);
                }
            }));
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
