import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTrainingRoutingModule } from './new-training-routing.module';
import { NewTrainingComponent } from './new-training.component';


@NgModule({
  declarations: [
    NewTrainingComponent
  ],
  imports: [
    CommonModule,
    NewTrainingRoutingModule
  ]
})
export class NewTrainingModule { }
