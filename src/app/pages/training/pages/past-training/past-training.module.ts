import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastTrainingRoutingModule } from './past-training-routing.module';
import { PastTrainingComponent } from './past-training.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/core/material/material.module';


@NgModule({
  declarations: [
    PastTrainingComponent
  ],
  imports: [
    CommonModule,
    PastTrainingRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    PastTrainingComponent
  ]
})
export class PastTrainingModule { }
