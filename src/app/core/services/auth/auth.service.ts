import { Injectable } from '@angular/core';
import { AuthData } from '../../models/auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ExerciseService } from '../exercise/exercise.service';
import { UIService } from '../ui/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app.reducer';
import * as UI from '../ui/ui.actions';
import * as Auth from './auth.actions';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private router: Router, private angularFireAuth: AngularFireAuth, private exerciseService: ExerciseService, private uiService: UIService, private store: Store<{ui: fromRoot.State}>) {}

    initAuthListener() {
        this.angularFireAuth.authState.subscribe((user) => {
            if (user) {
                this.store.dispatch(new Auth.SetAuthenticated);
                this.router.navigate(['/training']);
            } else {
                this.exerciseService.cancelSubscriptions();
                this.store.dispatch(new Auth.SetUnauthenticated());
                this.router.navigate(['/login']);
            }
        });
    }

    registerUser(authData: AuthData) {
        this.store.dispatch(new UI.StartLoading());
        this.angularFireAuth
            .createUserWithEmailAndPassword(authData.email, authData.password)
            .then((result) => {
                console.log(result);
                this.store.dispatch(new UI.StopLoading());
            })
            .catch((error) => {
                this.store.dispatch(new UI.StopLoading());
                this.uiService.showSnackbar(error.message, null, 4000);
            });
    }

    login(authData: AuthData) {
        this.store.dispatch(new UI.StartLoading());
        this.angularFireAuth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then((result) => {
                console.log(result);
                this.store.dispatch(new UI.StopLoading());
            })
            .catch((error) => {
                this.store.dispatch(new UI.StopLoading());
                this.uiService.showSnackbar(error.message, null, 4000);
            });
    }

    logout() {
        this.angularFireAuth.signOut();
    }
}
