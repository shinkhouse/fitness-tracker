import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentTrainingRoutingModule } from './current-training-routing.module';
import { CurrentTrainingComponent } from './current-training.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/core/material/material.module';


@NgModule({
  declarations: [
    CurrentTrainingComponent
  ],
  imports: [
    CommonModule,
    CurrentTrainingRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [
    CurrentTrainingComponent
  ]
})
export class CurrentTrainingModule { }
