import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from 'src/app/core/models/exercise.model';
import { ExerciseService } from 'src/app/core/services/exercise/exercise.service';
import { map, Observable, Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit, OnDestroy {
    public exercise: Exercise;
    public availableExercises: Exercise[] = [];
    exerciseSubscription: Subscription;
    constructor(private exerciseService: ExerciseService) {}

    ngOnInit(): void {
        this.exerciseSubscription = this.exerciseService.exercisesChanged.subscribe((res) => {
            this.availableExercises = res;
        });
        this.exerciseService.fetchAvailableExercises();
    }

    ngOnDestroy(): void {
        if (this.exerciseSubscription) {
            this.exerciseSubscription.unsubscribe();
        }
    }

    onStartTraining(form: NgForm) {
        this.exerciseService.startExercise(form.value.exercise);
    }
}
