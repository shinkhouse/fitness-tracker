import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.scss']
})
export class CurrentTrainingComponent implements OnInit {
  public progress: number = 0;
  public timer: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.timer = window.setInterval(() => {
      this.progress += 1
      if (this.progress >= 100) {
        window.clearInterval(this.timer);
      }
    }, 500);
  }

  stopWorkout() {
      window.clearInterval(this.timer);
  }

}
