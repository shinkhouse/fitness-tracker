import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from 'src/app/core/models/exercise.model';
import { ExerciseService } from 'src/app/core/services/exercise.service';

@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit {
    public exercise: Exercise
    constructor(private exerciseService: ExerciseService) {}

    ngOnInit(): void {}

    onStartTraining(form: NgForm) {
      this.exerciseService.startExercise(form.value.exercise);
    }

    getAvailableExercises(): Exercise[] {
      return this.exerciseService.getAvailableExercises();
    }
}
