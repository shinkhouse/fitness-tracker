import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from '../stop-training/stop-training.component';

@Component({
    selector: 'app-current-training',
    templateUrl: './current-training.component.html',
    styleUrls: ['./current-training.component.scss'],
})
export class CurrentTrainingComponent implements OnInit {
    public progress: number = 0;
    public timer: number = 0;
    @Output() trainingExit = new EventEmitter<void>();
    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {
        this.startOrResumeTimer();
    }

    startOrResumeTimer() {
        this.timer = window.setInterval(() => {
            this.progress += 5;
            if (this.progress >= 100) {
                window.clearInterval(this.timer);
            }
        }, 1000);
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
                    this.trainingExit.emit();
                } else {
                  this.startOrResumeTimer();
                }
            });
    }
}
