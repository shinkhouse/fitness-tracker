import { Injectable } from '@angular/core';
import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ExerciseService } from './exercise.service';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    public authChange: Subject<boolean> = new Subject<boolean>();
    private isAuthenticated: boolean = false;
    constructor(private router: Router, private angularFireAuth: AngularFireAuth, private exerciseService: ExerciseService) {}
    
    initAuthListener() {
        this.angularFireAuth.authState.subscribe((user) => {
            if(user) {
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/training']);
            } else {
                this.exerciseService.cancelSubscriptions();
                this.isAuthenticated = false;
                this.authChange.next(false);
                this.router.navigate(['/login']);
            }
        })
    }

    registerUser(authData: AuthData) {
        this.angularFireAuth
            .createUserWithEmailAndPassword(authData.email, authData.password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    login(authData: AuthData) {
        this.angularFireAuth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    logout() {
        this.angularFireAuth.signOut();
    }

    isAuth() {
        return this.isAuthenticated;
    }
}
