import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Exercise } from 'src/app/core/models/exercise.model';
import { ExerciseService } from 'src/app/core/services/exercise/exercise.service';
import { StopTrainingComponent } from '../stop-training/stop-training.component';
import * as fromTraining from '../../training.reducer';
@Component({
    selector: 'app-current-training',
    templateUrl: './current-training.component.html',
    styleUrls: ['./current-training.component.scss'],
})
export class CurrentTrainingComponent implements OnInit {
    public progress: number = 0;
    public timer: number = 0;
    public currentExercise: Exercise;
    constructor(private dialog: MatDialog, private exerciseService: ExerciseService, private store: Store<fromTraining.State>) {}

    ngOnInit(): void {
        this.startOrResumeTimer();
    }

    startOrResumeTimer() {
        this.store.select(fromTraining.getActiveTraining).subscribe((exercise: Exercise) => {
            const step = (exercise.duration / 100) * 1000;
            this.timer = window.setInterval(() => {
                this.progress += 1;
                if (this.progress >= 100) {
                    this.exerciseService.completeExercise();
                    window.clearInterval(this.timer);
                }
            }, step);
        })
    }

    stopWorkout() {
        window.clearInterval(this.timer);

        this.dialog
            .open(StopTrainingComponent, {
                data: {
                    progress: this.progress,
                },
            })
            .afterClosed()
            .subscribe((res) => {
                if (res) {
                    this.exerciseService.cancelExercise(this.progress);
                } else {
                    this.startOrResumeTimer();
                }
            });
    }
}
