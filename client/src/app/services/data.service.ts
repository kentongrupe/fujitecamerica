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
    public getProjects(params: any, onSuccess: Function = null, onError: Function = null): void {
        if (onSuccess) {
            let _z = () => {
                let c = ['Elevator', 'Residence', 'Commercial Facilitiy', 'Hotel', 'Residence', 'Office', 'Transportation', 'Moving Walk'];
                let n = Math.max(3, Math.round(Math.random() * 4));
                let z = [];
                let N = params.additional ? 24 : 8;
                for (let i = 0; i < N; i++) {
                    z.push({
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
                    });
                }
                return z;
            };
            let projects = params.additional
                ? [
                    {
                        name: '',
                        projects: _z()
                    }]
                : [
                    {
                        name: 'North America',
                        projects: [
                            {
                                name: 'Service & Maintenance',
                                projects: _z()
                            },
                            {
                                name: 'Modernization',
                                projects: _z()
                            },
                            {
                                name: 'Installation',
                                projects: _z()
                            }
                        ]
                    },
                    {
                        name: 'Global',
                        projects: _z()
                    }
                ];
            onSuccess({
                projects
            });
        }
    }
    public getTestimonials(onSuccess: Function = null, onError: Function = null): void {
        onSuccess({
            testimonials: [
                {
                    text: '…the only contract we did not take out to bid was the elevator contract because we knew we could not beat the service and support we receive from Fujitec. I believe what separates Fujitec from other elevator companies is the tremendous support we receive from everyone in the company… Their commitment to excellence is why we truly cherish our partnership with Fujitec.',
                    name: 'S. Baggett',
                    city: 'Dallas',
                    state: 'TX'
                },
                {
                    text: '… Fujitec America, Inc. has provided outstanding service at the Lazarus Building, and couple that with an aggressive pricing structure, building management was proud to award Fujitec a building-wide vertical transportation maintenance agreement on 22 elevators. NAI Ohio Equities looks forward to developing an even greater partnership with Fujitec in the future.',
                    name: 'R. Turrin',
                    city: 'Columbus',
                    state: 'OH'
                },
                {
                    text: 'Having two buildings with elevators close in age, it is clear that Fujitec service is far superior to that of other providers... Fujitec is a perfect example of the old cliché; you get what you pay for. An operating expense well spent.',
                    name: 'M. Robison',
                    city: 'Washington',
                    state: 'D.C.'
                },
                {
                    text: '… These days, it seems like many companies are compromising their customer service, it is great to work with a company that truly cares and always does the right thing. I cannot speak highly enough of Fujitec. Thank you!',
                    name: 'R. Smith',
                    city: 'Cincinnati',
                    state: 'OH'
                },
                {
                    text: 'Working with Fujitec Elevator is a pleasure, with clearly superior equipment, and great customer service from every employee, whether upper management or service technicians. It is a joy to work with an elevator company that actually delivers what they say they will, when they say they will.',
                    name: 'J. Hope',
                    city: 'Chicago',
                    state: 'IL'
                }
            ]
        });
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
