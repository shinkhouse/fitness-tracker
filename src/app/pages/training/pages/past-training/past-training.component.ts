import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from 'src/app/core/models/exercise.model';
import { ExerciseService } from 'src/app/core/services/exercise.service';

@Component({
    selector: 'app-past-training',
    templateUrl: './past-training.component.html',
    styleUrls: ['./past-training.component.scss'],
})
export class PastTrainingComponent implements OnInit {
    public pastExercises: Exercise[] = [];
    displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
    dataSource = new MatTableDataSource<Exercise>();
    constructor(private exerciseService: ExerciseService) {}

    ngOnInit(): void {
        this.getPastExercises();
    }

    getPastExercises() {
        this.pastExercises = this.exerciseService.getPastExercises();
        this.dataSource.data = this.pastExercises;
    }
}
