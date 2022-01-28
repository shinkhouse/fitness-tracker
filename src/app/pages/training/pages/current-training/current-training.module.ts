import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentTrainingRoutingModule } from './current-training-routing.module';
import { CurrentTrainingComponent } from './current-training.component';


@NgModule({
  declarations: [
    CurrentTrainingComponent
  ],
  imports: [
    CommonModule,
    CurrentTrainingRoutingModule
  ]
})
export class CurrentTrainingModule { }
