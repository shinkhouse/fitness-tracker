import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastTrainingComponent } from './past-training.component';

const routes: Routes = [{ path: '', component: PastTrainingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastTrainingRoutingModule { }
