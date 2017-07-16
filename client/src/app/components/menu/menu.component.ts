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

    @Input() public expandChildren: boolean = false;
    @Output() public menuClick: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();

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
        item.expanded = value;
    }
}
