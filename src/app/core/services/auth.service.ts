import { Injectable } from '@angular/core';
import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public authChange: Subject<boolean> = new Subject<boolean>();
    private user: User | undefined | null;
    constructor(private router: Router) {}

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString(),
        };

        this.authSuccessful();
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 10000).toString(),
        };

        this.authSuccessful();
    }

    logout() {
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser() {
      return { ...this.user };
    }

    isAuth() {
      return this.user != null;
    }

    private authSuccessful() {
      this.authChange.next(true);
      this.router.navigate(['/training']);
    }
}
