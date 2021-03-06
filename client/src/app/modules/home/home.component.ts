import {
    Component,
    ElementRef,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren
} from '@angular/core';
import {
    ActivatedRoute,
    NavigationEnd,
    Router
} from '@angular/router';
import {
    BaseRouteComponent
} from 'app/core';
import {
    IFrameComponent
} from 'app/components';
import {
    AppEvent,
    AppRoute,
    Media,
    MediaType,
    MenuItem,
} from 'app/models';
import {
    DataService,
    EventService,
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseRouteComponent implements OnInit {

    @ViewChild('slides') private _slidesDiv: ElementRef;
    @ViewChildren('slide') private _slides: QueryList<any>;

    private _SLIDE_HEIGHT: number = 400;
    private _SLIDE_WIDTH: number = 1920;

    private _intervalId: any = null;
    private _mediaType = MediaType;
    private _resources: MenuItem[] = [];
    private _slideItems: Media[] = [];
    private _slideHeight: number = this._SLIDE_HEIGHT;
    private _slideWidth: number = this._SLIDE_WIDTH;
    private _sliding: boolean = false;

    private get _slidesRect(): ClientRect {
        if (this._slidesDiv && this._slidesDiv.nativeElement) {
            return (this._slidesDiv.nativeElement as HTMLDivElement).getClientRects()[0];
        }
        let r = {
            left: 0,
            top: 0,
            right: this._SLIDE_WIDTH,
            bottom: this._SLIDE_HEIGHT
        } as ClientRect;
        return r;
    }

    constructor(
        protected route: ActivatedRoute,
        protected router: Router,
        private dataService: DataService,
        private eventService: EventService,
        private stringService: StringService
    ) {
        super('HomeComponent', route, router);
        this._stringService = stringService;
    }

    public ngOnInit() {
        this.dataService.getSlides((d) => {
            this._slideItems = d.slides.reverse().map((s) => {
                return new Media(s);
            });

            Promise.resolve()
                .then(() => {
                    this._updateSlidesSize();
                    this._startTimer();
                });
        });

        this._resources = [
            {
                label: this._getString('consulting-firms', 'Consulting Firms'),
                icon: 'consulting',
                routerLink: AppRoute.CONSULTANTS
            },
            {
                label: this._getString('property-management-cos', 'Property Management Cos'),
                icon: 'property',
                routerLink: AppRoute.PROPERTY_MANAGERS
            },
            {
                label: this._getString('architects-general-contractors', 'Architects & General Contractors'),
                icon: 'contractors',
                routerLink: AppRoute.ARCHITECTS
            },
        ];
    }
    private _onResize(event: UIEvent): void {
        this._updateSlidesSize();
    }
    private _showResource(resource: MenuItem): void {
        // this.eventService.dispatch(AppEvent.SHOW_RESOURCE, resource);
    }
    private _startTimer(): void {
        if (this._slideItems.length > 1) {
            this._intervalId = setInterval(() => {
                this._sliding = true;
                setTimeout(() => {
                    // let s = this._slideItems.shift();
                    // this._slideItems.push(s);
                    let s = this._slideItems.pop();
                    this._slideItems.unshift(s);
                    this._sliding = false;
                }, 1000);
            }, 5000);
        }
    }
    private _stopTimer(): void {
        if (this._intervalId !== null) {
            clearInterval(this._intervalId);
        }
    }
    private _updateSlidesSize(): void {
        const R = this._SLIDE_WIDTH / this._SLIDE_HEIGHT;
        let r = this._slidesRect;

        this._slideWidth = r.width;
        // this._slideHeight = Math.min(Math.ceil(r.width / R), this._SLIDE_HEIGHT);
        this._slideHeight = this._SLIDE_HEIGHT;
    }
}
