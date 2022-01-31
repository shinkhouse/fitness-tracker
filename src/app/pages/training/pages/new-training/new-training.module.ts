import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTrainingRoutingModule } from './new-training-routing.module';
import { NewTrainingComponent } from './new-training.component';
import { MaterialModule } from 'src/app/core/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewTrainingComponent
  ],
  imports: [
    CommonModule,
    NewTrainingRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NewTrainingComponent
  ]
})
export class NewTrainingModule { }
