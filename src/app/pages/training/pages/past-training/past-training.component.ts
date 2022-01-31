import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from 'src/app/core/models/exercise.model';
import { ExerciseService } from 'src/app/core/services/exercise/exercise.service';
import { Store } from '@ngrx/store';
import * as fromTraining from '../../training.reducer';
@Component({
    selector: 'app-past-training',
    templateUrl: './past-training.component.html',
    styleUrls: ['./past-training.component.scss'],
})
export class PastTrainingComponent implements OnInit, AfterViewInit {
    public pastExercises: Exercise[] = [];
    displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
    dataSource = new MatTableDataSource<Exercise>();

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
    constructor(private exerciseService: ExerciseService, private store: Store<fromTraining.State>) {}

    ngOnInit(): void {
        this.getPastExercises();
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    }

    getPastExercises() {
        this.exerciseService.fetchPastExercises();
        this.store.select(fromTraining.getFinishedExercises).subscribe((res: Exercise[]) => {
            this.pastExercises = res;
            this.dataSource.data = this.pastExercises;
        });
    }

    doFilter(event) {
        const filterValue = (<HTMLInputElement>event.target).value.toLowerCase().trim();
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
