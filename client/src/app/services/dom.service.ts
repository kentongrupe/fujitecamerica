import {
    ElementRef,
    Injectable
} from '@angular/core';
import {
    Title
} from '@angular/platform-browser';
import {
    BaseService
} from 'app/core';

@Injectable()
export class DOMService extends BaseService {

    constructor(
        private titleService: Title
    ) {
        super('DOMService');
    }

    public addClass(el: any, className: string): void {
        if (el && (el.className !== undefined)) {
            if (this.isNullOrEmpty(el.className)) {
                el.className = className;
            } else {
                let a = el.className.split(' ');
                if (!a.includes(className)) {
                    a.push(className);
                    el.className = a.join(' ');
                }
            }
        }
    }
    public appendChild(parent: Node, child: Node): boolean {
        if (parent && child) {
            parent.appendChild(child);
            return true;
        }
        return false;
    }
    public getElementsByClassName(el: ElementRef, className: string): HTMLCollection {
        if (el && !this.isNullOrEmpty(className)) {
            return el.nativeElement.getElementsByClassName(className);
        }
        return new HTMLCollection();
    }
    public getElementsByTagName(el: ElementRef, tagName: string): HTMLCollection {
        if (el && !this.isNullOrEmpty(tagName)) {
            return el.nativeElement.getElementsByTagName(tagName);
        }
        return new HTMLCollection();
    }
    public loadStyle(url: string): void {
        document.getElementById('styles').attributes['href'].value = url;
    }
    public removeChild(parent: Node, child: Node): Node {
        if (parent && child) {
            return parent.removeChild(child);
        }
        return null;
    }
    public scrollTo(x: number = 0, y: number = 0): void {
        window.scrollTo(x, y);
    }
    public setSwitchName(switchName: string): void {
        this.setTitle('{0} - APCON WebXR'.format(switchName));
    }
    public setTitle(title: string): void {
        this.titleService.setTitle(title);
    }
}
