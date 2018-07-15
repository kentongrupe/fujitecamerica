import {
    ElementRef,
    Injectable
} from '@angular/core';
import {
    BaseService
} from 'app/core';
import {
    RouterService
} from './router.service';

declare const $;

@Injectable()
export class DOMService extends BaseService {

    private _isScrolling: boolean = false;
    private _scrollTime: number = 1000;

    constructor(
        private routerService: RouterService
    ) {
        super('DOMService');
    }

    public scrollIntoView(container: ElementRef, target: ElementRef): void {
        // target.nativeElement.scrollIntoView(true);
        let t = $(target.nativeElement);
        let c = t.parent();
        let e = c.parent();
        let scrollTop = container.nativeElement.scrollTop + t.position().top;

        $(container.nativeElement).animate({
            scrollTop
        }, this._scrollTime);

        // target.nativeElement.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start',
        //     inline: 'start'
        // });
    }
    public scrollToTop(container: ElementRef, route: string): void {
        $(container.nativeElement).animate({
            scrollTop: 0
        }, this._scrollTime);

        setTimeout(() => {
            this.routerService.to(route);
        }, this._scrollTime);
    }

    // private _scrollTo(container: ElementRef, target?: ElementRef): void {
    //     if (!this._isScrolling) {
    //         this._isScrolling = true;

    //         let scrollTop: number = target ? $(target.nativeElement).offset().top : 0;

    //         console.log(scrollTop);

    //         $(container.nativeElement).animate({
    //             scrollTop
    //         }, 500, () => {
    //             this._isScrolling = false;
    //             // Callback after animation
    //             // Must change focus!
    //             // $target.focus();
    //             // if ($target.is(":focus")) { // Checking if the target was focused
    //             //     return false;
    //             // } else {
    //             //     $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
    //             //     $target.focus(); // Set focus again
    //             // };
    //         });
    //     }
    // }
}
