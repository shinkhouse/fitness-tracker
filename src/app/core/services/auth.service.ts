import { Injectable } from '@angular/core';
import { AuthData } from '../models/auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ExerciseService } from './exercise.service';
import { UIService } from './ui.service';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public authChange: Subject<boolean> = new Subject<boolean>();
    private isAuthenticated: boolean = false;
    constructor(private router: Router, private angularFireAuth: AngularFireAuth, private exerciseService: ExerciseService, private uiService: UIService) {}

    initAuthListener() {
        this.angularFireAuth.authState.subscribe((user) => {
            if (user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/training']);
            } else {
                this.exerciseService.cancelSubscriptions();
                this.isAuthenticated = false;
                this.authChange.next(false);
                this.router.navigate(['/login']);
            }
        });
    }

    registerUser(authData: AuthData) {
        this.uiService.loadingStateChanged.next(true);
        this.angularFireAuth
            .createUserWithEmailAndPassword(authData.email, authData.password)
            .then((result) => {
                console.log(result);
                this.uiService.loadingStateChanged.next(false);
            })
            .catch((error) => {
                this.uiService.loadingStateChanged.next(false);
                this.uiService.showSnackbar(error.message, null, 4000);
            });
    }

    login(authData: AuthData) {
        this.uiService.loadingStateChanged.next(true);
        this.angularFireAuth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then((result) => {
                console.log(result);
                this.uiService.loadingStateChanged.next(false);
            })
            .catch((error) => {
                this.uiService.loadingStateChanged.next(false);
                this.uiService.showSnackbar(error.message, null, 4000);
            });
    }

    logout() {
        this.angularFireAuth.signOut();
    }

    isAuth() {
        return this.isAuthenticated;
    }
}
