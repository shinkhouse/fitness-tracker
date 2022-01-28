import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopTrainingComponent } from './stop-training.component';
import { MaterialModule } from 'src/app/core/material/material.module';



@NgModule({
  declarations: [
    StopTrainingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    StopTrainingComponent
  ]
})
export class StopTrainingModule { }
