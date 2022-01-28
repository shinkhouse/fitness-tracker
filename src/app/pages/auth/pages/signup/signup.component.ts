import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    maxDate: Date = new Date();
    minDate: Date = new Date();
    constructor() {}

    ngOnInit(): void {
      this.minDate.setFullYear(this.maxDate.getFullYear() - 100);
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 15);
    }

    onSubmit(form: NgForm) {
        console.log(form);
    }
}
