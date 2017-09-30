import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['../../node_modules/clarity-ui/clarity-ui.min.css'],
    templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {

    public ngOnInit() {
        return;
    }
}
