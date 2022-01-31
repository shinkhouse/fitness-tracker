import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AuthService } from './core/services/auth/auth.service';
import { UIService } from './core/services/ui/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from './app.reducer';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    isLoading$: Observable<boolean>;
    constructor(private authService: AuthService, private uiService: UIService, private store: Store<{ ui: fromRoot.State }>) {}
    ngOnInit(): void {
        this.authService.initAuthListener();

        this.isLoading$ = this.store.select(fromRoot.getISloading);
    }

    title = 'fitness-tracker';
}
