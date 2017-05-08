import {
    Component,
    ElementRef,
    OnInit,
    ViewChild
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    BaseNavRouteComponent
} from 'app/core';
import {
    AppRoute,
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

    private _intervalId: any = null;
    private _slides: any[] = [];
    private _slideHeight: number = 300;
    private _slideWidth: number = 1200;
    private _sliding: boolean = false;

    private get _slidesRect(): ClientRect {
        if (this._slidesDiv && this._slidesDiv.nativeElement) {
            return (this._slidesDiv.nativeElement as HTMLDivElement).getClientRects()[0];
        }
        let r = {
            left: 0,
            top: 0,
            right: 1200,
            bottom: 300
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
        this._slides = [
            {
                url: '/assets/img/ElevatorLobbyBW.jpg'
            },
            {
                url: '/assets/img/ElevatorLobbyBW.jpg'
            },
            {
                url: '/assets/img/ElevatorLobbyBW.jpg'
            },
            {
                url: '/assets/img/ElevatorLobbyBW.jpg'
            }
        ];

        this._updateSlidesSize();

        if (this._slides.length > 1) {
            this._intervalId = setInterval(() => {
                this._sliding = true;
                setTimeout(() => {
                    let s = this._slides.shift();
                    this._slides.push(s);
                    this._sliding = false;
                }, 1000);
            }, 5000);
        }
    }
    private _onResize(event: UIEvent): void {
        this._updateSlidesSize();
    }
    private _updateSlidesSize(): void {
        const R = 1200 / 300;
        let r = this._slidesRect;

        this._slideWidth = r.width;
        this._slideHeight = Math.ceil(r.width / R);
    }
}
