import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UIService } from 'src/app/core/services/ui/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../app.reducer';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    maxDate: Date = new Date();
    minDate: Date = new Date();
    isLoading$: Observable<boolean>;
    constructor(private auth: AuthService, private uiService: UIService, private store: Store<{ ui: fromRoot.State }>) {}

    ngOnInit(): void {
        this.minDate.setFullYear(this.maxDate.getFullYear() - 100);
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 15);

        this.isLoading$ = this.store.select(fromRoot.getISloading);
    }

    onSubmit(form: NgForm) {
        console.log(form);
        this.auth.registerUser({
            email: form.value.email,
            password: form.value.password,
        });
    }
}
