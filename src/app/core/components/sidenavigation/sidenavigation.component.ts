import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app.reducer';

@Component({
    selector: 'app-sidenavigation',
    templateUrl: './sidenavigation.component.html',
    styleUrls: ['./sidenavigation.component.scss'],
})
export class SidenavigationComponent implements OnInit {
    @Output() sidenavToggle = new EventEmitter<void>();
    public isAuth$: Observable<boolean>;
    constructor(private auth: AuthService, private store: Store<fromRoot.State>) {}

    ngOnInit(): void {
        this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
    }

    onSidenavToggle() {
        this.sidenavToggle.emit();
    }

    onLogout() {
        this.onSidenavToggle();
        this.auth.logout();
    }
}
