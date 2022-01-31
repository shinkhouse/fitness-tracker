import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastTrainingRoutingModule } from './past-training-routing.module';
import { PastTrainingComponent } from './past-training.component';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';


@NgModule({
  declarations: [
    PastTrainingComponent
  ],
  imports: [
    CommonModule,
    PastTrainingRoutingModule,
    SharedModule
  ],
  exports: [
    PastTrainingComponent
  ]
})
export class PastTrainingModule { }
