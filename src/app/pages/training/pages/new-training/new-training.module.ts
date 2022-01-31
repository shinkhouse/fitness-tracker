import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTrainingRoutingModule } from './new-training-routing.module';
import { NewTrainingComponent } from './new-training.component';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';


@NgModule({
  declarations: [
    NewTrainingComponent
  ],
  imports: [
    CommonModule,
    NewTrainingRoutingModule,
    SharedModule
  ],
  exports: [
    NewTrainingComponent
  ]
})
export class NewTrainingModule { }
