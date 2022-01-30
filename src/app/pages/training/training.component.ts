import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExerciseService } from 'src/app/core/services/exercise.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  public ongoingTraining: boolean = false;
  private exerciseSubscription: Subscription;
  constructor(private exercise: ExerciseService) { }

  ngOnInit(): void {
    this.exerciseSubscription = this.exercise.exerciseChanged.subscribe((res) => {
        console.log(res);
        if (res) {
          this.ongoingTraining = true;
        } else {
          this.ongoingTraining = false;
        }
    })
  }

}
