import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-sidenavigation',
    templateUrl: './sidenavigation.component.html',
    styleUrls: ['./sidenavigation.component.scss'],
})
export class SidenavigationComponent implements OnInit, OnDestroy {
    @Output() sidenavToggle = new EventEmitter<void>();
    public isAuth: boolean = false;
    public authSubscription: Subscription = new Subscription();
    constructor(private auth: AuthService) {}

    ngOnInit(): void {
        this.authSubscription = this.auth.authChange.subscribe((res) => {
            this.isAuth = res;
        });
    }

    ngOnDestroy(): void {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
    }

    onSidenavToggle() {
        this.sidenavToggle.emit();
    }

    onLogout() {
        this.onSidenavToggle();
        this.auth.logout();
    }
}
