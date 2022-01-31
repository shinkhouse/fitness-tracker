import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { UIService } from 'src/app/core/services/ui.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
    maxDate: Date = new Date();
    minDate: Date = new Date();
    isLoading: boolean = false;
    private loadingSubs: Subscription;
    constructor(private auth: AuthService, private uiService: UIService) {}

    ngOnInit(): void {
        this.minDate.setFullYear(this.maxDate.getFullYear() - 100);
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 15);

        this.loadingSubs = this.uiService.loadingStateChanged.subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
    }

    ngOnDestroy(): void {
        if (this.loadingSubs) {
            this.loadingSubs.unsubscribe();
        }
    }

    onSubmit(form: NgForm) {
        console.log(form);
        this.auth.registerUser({
            email: form.value.email,
            password: form.value.password,
        });
    }
}
