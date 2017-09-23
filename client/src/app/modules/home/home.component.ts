import {
    Component,
    ElementRef,
    OnInit,
    QueryList,
    ViewChild,
    ViewChildren
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    BaseNavRouteComponent
} from 'app/core';
import {
    IFrameComponent
} from 'app/components';
import {
    AppRoute,
    MediaType,
    MenuItem
} from 'app/models';
import {
    RouterService,
    StringService
} from 'app/services';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent extends BaseNavRouteComponent implements OnInit {

    @ViewChild('slides') private _slidesDiv: ElementRef;
    @ViewChildren('slide') private _slides: QueryList<any>;

    private _SLIDE_HEIGHT: number = 400;
    private _SLIDE_WIDTH: number = 1920;

    private _intervalId: any = null;
    private _mediaType = MediaType;
    private _slideItems: any[] = [];
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
        protected router: Router,
        protected routerService: RouterService,
        private stringService: StringService
    ) {
        super('HomeComponent', router, routerService);
        this._stringService = stringService;
    }

    public ngOnInit() {
        this._slideItems = [
            {
                type: MediaType.IMAGE,
                url: '/assets/img/elevatorlobby.jpg'
            },
            {
                type: MediaType.VIDEO,
                url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
            },
            {
                type: MediaType.IMAGE,
                url: '/assets/img/escalatorholloywood.jpg'
            },
            {
                type: MediaType.IMAGE,
                url: '/assets/img/ezshuttle.jpg'
            }
        ];

        setTimeout(() => {
            this._updateSlidesSize();
            this._startTimer();
        });
    }
    private _onResize(event: UIEvent): void {
        this._updateSlidesSize();
    }
    private _startTimer(): void {
        if (this._slideItems.length > 1) {
            this._intervalId = setInterval(() => {
                this._sliding = true;
                setTimeout(() => {
                    let s = this._slideItems.shift();
                    this._slideItems.push(s);
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
