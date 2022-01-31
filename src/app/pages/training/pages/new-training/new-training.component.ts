import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from 'src/app/core/models/exercise.model';
import { ExerciseService } from 'src/app/core/services/exercise.service';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
@Component({
    selector: 'app-new-training',
    templateUrl: './new-training.component.html',
    styleUrls: ['./new-training.component.scss'],
})
export class NewTrainingComponent implements OnInit {
    public exercise: Exercise;
    public collectionRef: any;
    availableExercises$: Observable<Exercise[]>;
    constructor(private exerciseService: ExerciseService, private firestore: Firestore) {}
    
    ngOnInit(): void {
      this.collectionRef = collection(this.firestore, 'availableExercises');
        this.availableExercises$ = collectionData(this.collectionRef);
    }

    onStartTraining(form: NgForm) {
        this.exerciseService.startExercise(form.value.exercise);
    }

    getAvailableExercises(): Exercise[] {
        return this.exerciseService.getAvailableExercises();
    }
}
