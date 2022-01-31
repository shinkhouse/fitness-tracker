import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingComponent } from './training.component';
import { CurrentTrainingModule } from './pages/current-training/current-training.module';
import { PastTrainingModule } from './pages/past-training/past-training.module';
import { NewTrainingModule } from './pages/new-training/new-training.module';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { trainingReducer } from './training.reducer';

@NgModule({
    declarations: [TrainingComponent],
    imports: [TrainingRoutingModule, SharedModule, CurrentTrainingModule, PastTrainingModule, NewTrainingModule, 
      StoreModule.forFeature('training', trainingReducer)],
})
export class TrainingModule {}
