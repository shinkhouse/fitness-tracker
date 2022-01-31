import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app.reducer';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
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
        this.auth.logout();
    }
}
