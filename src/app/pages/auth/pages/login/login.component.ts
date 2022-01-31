import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UIService } from 'src/app/core/services/ui/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../app.reducer';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    isLoading$: Observable<boolean>;
    constructor(private auth: AuthService, private uiService: UIService, private store: Store<{ ui: fromRoot.State }>) {}

    ngOnInit(): void {
        this.isLoading$ = this.store.select(fromRoot.getISloading);
    }

    onSubmit(form: NgForm) {
        console.log(form);
        this.auth.login({
            email: form.value.email,
            password: form.value.password,
        });
    }
}
