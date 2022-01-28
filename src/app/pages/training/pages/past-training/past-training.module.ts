import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastTrainingRoutingModule } from './past-training-routing.module';
import { PastTrainingComponent } from './past-training.component';


@NgModule({
  declarations: [
    PastTrainingComponent
  ],
  imports: [
    CommonModule,
    PastTrainingRoutingModule
  ]
})
export class PastTrainingModule { }
