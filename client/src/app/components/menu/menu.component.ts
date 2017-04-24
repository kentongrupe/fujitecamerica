import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild
} from '@angular/core';
import {
    BaseComponent
} from 'app/core';
import {
    MenuItem
} from 'app/models';

@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent extends BaseComponent {

    @Output() public menuClick: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
    @Output() public showSubMenu: EventEmitter<MenuItem[]> = new EventEmitter<MenuItem[]>();

    private _model: MenuItem[] = [];
    public get model(): MenuItem[] {
        return this._model;
    }
    @Input() public set model(value: MenuItem[]) {
        this._model = value;
    }

    private _items: MenuItem[] = [];

    constructor() {
        super('AppHeaderComponent');
    }

    private _onClick(menuItem: MenuItem, event: MouseEvent): void {
        this._preventDefault(event);
        this.menuClick.emit(menuItem);
    }
    private _toggleMenu(event: MouseEvent, item: MenuItem, value: boolean): void {
        // this._preventDefault(event);
        item.expanded = value;

        if (value === true) {
            if (item.items && (item.items.length > 0)) {
                this.showSubMenu.emit(item.items);
            } else {
                this.showSubMenu.emit(null);
            }
        } else {
            this.showSubMenu.emit(null);
        }
    }
}
