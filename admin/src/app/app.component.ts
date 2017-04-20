import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {

    public ngOnInit() {
        return;
    }
}
