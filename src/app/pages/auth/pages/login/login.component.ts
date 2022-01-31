import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { UIService } from 'src/app/core/services/ui.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    isLoading: boolean = false;
    private loadingSubs: Subscription;
    constructor(private auth: AuthService, private uiService: UIService) {}

    ngOnInit(): void {
        this.loadingSubs = this.uiService.loadingStateChanged.subscribe((isLoading) => {
            this.isLoading = isLoading;
        })
    }

    ngOnDestroy(): void {
        if(this.loadingSubs) {
            this.loadingSubs.unsubscribe();
        }
    }

    onSubmit(form: NgForm) {
        console.log(form);
        this.auth.login({
            email: form.value.email,
            password: form.value.password,
        });
    }
}
