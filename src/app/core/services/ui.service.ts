import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UIService {
    loadingStateChanged: Subject<boolean> = new Subject<boolean>();
    constructor(private snackbar: MatSnackBar) {}

    showSnackbar(message: string, action: string | null, duration: number) {
        this.snackbar.open(message, action, {
            duration: duration,
        });
    }
}
