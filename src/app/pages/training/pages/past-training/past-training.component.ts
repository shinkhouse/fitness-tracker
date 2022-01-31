import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter, Subscription } from 'rxjs';
import { Exercise } from 'src/app/core/models/exercise.model';
import { ExerciseService } from 'src/app/core/services/exercise.service';

@Component({
    selector: 'app-past-training',
    templateUrl: './past-training.component.html',
    styleUrls: ['./past-training.component.scss'],
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
    public pastExercises: Exercise[] = [];
    pastExerciseSubscription: Subscription;
    displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
    dataSource = new MatTableDataSource<Exercise>();

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    constructor(private exerciseService: ExerciseService) {}

    ngOnInit(): void {
        this.getPastExercises();
    }

    ngOnDestroy() {
        if (this.pastExerciseSubscription) {
            this.pastExerciseSubscription.unsubscribe();
        }
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    getPastExercises() {
        this.exerciseService.fetchPastExercises();
        this.pastExerciseSubscription = this.exerciseService.finishedExercisesChanged.subscribe((res: Exercise[]) => {
            this.pastExercises = res;
            this.dataSource.data = this.pastExercises;
            console.log(res);
        });
    }

    doFilter(event) {
        const filterValue = (<HTMLInputElement>event.target).value.toLowerCase().trim();
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
