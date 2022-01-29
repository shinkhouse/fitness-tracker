import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    maxDate: Date = new Date();
    minDate: Date = new Date();
    constructor(private auth: AuthService) {}

    ngOnInit(): void {
        this.minDate.setFullYear(this.maxDate.getFullYear() - 100);
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 15);
    }

    onSubmit(form: NgForm) {
        console.log(form);
        this.auth.registerUser({
            email: form.value.email,
            password: form.value.password,
        });
    }
}
