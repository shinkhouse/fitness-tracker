import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private auth: AuthService) {}

    ngOnInit(): void {}

    onSubmit(form: NgForm) {
        console.log(form);
        this.auth.login({
            email: form.value.email,
            password: form.value.password,
        });
    }
}
