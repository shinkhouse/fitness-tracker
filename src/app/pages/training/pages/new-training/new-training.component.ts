import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from 'src/app/core/models/exercise.model';
import { ExerciseService } from 'src/app/core/services/exercise/exercise.service';
import {  Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromTraining from '../../training.reducer';

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit {
    public exercise: Exercise;
    public availableExercises$: Observable<Exercise[]>;
    constructor(private exerciseService: ExerciseService, private store: Store<fromTraining.State>) {}

    ngOnInit(): void {
        this.availableExercises$ = this.store.select(fromTraining.getAvailableExercises);
        this.exerciseService.fetchAvailableExercises();
    }

    onStartTraining(form: NgForm) {
        this.exerciseService.startExercise(form.value.exercise);
    }
}
