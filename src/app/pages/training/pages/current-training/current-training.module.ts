import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentTrainingRoutingModule } from './current-training-routing.module';
import { CurrentTrainingComponent } from './current-training.component';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';


@NgModule({
  declarations: [
    CurrentTrainingComponent
  ],
  imports: [
    CommonModule,
    CurrentTrainingRoutingModule,
    SharedModule
  ],
  exports: [
    CurrentTrainingComponent
  ]
})
export class CurrentTrainingModule { }
