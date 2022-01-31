import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { UIService } from './core/services/ui.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    public isLoading: boolean = false;
    public loadingSubs: Subscription;

    constructor(private authService: AuthService, private uiService: UIService) {}
    ngOnInit(): void {
        this.authService.initAuthListener();
        this.loadingSubs = this.uiService.loadingStateChanged.subscribe((res: boolean) => {
            this.isLoading = res;
        });
    }

    ngOnDestroy(): void {
        if (this.loadingSubs) {
            this.loadingSubs.unsubscribe();
        }
    }

    title = 'fitness-tracker';
}
