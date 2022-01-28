import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { CurrentTrainingModule } from './pages/current-training/current-training.module';
import { PastTrainingModule } from './pages/past-training/past-training.module';
import { NewTrainingModule } from './pages/new-training/new-training.module';


@NgModule({
  declarations: [
    TrainingComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    MaterialModule,
    CurrentTrainingModule,
    PastTrainingModule,
    NewTrainingModule
  ]
})
export class TrainingModule { }
