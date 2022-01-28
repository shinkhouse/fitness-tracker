import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './training.component';

const routes: Routes = [
  { path: '', component: TrainingComponent },
  {
    path: 'new',
    loadChildren: () =>
      import('./pages/new-training/new-training.module').then(
        (m) => m.NewTrainingModule
      ),
  },
  {
    path: 'current',
    loadChildren: () =>
      import('./pages/current-training/current-training.module').then(
        (m) => m.CurrentTrainingModule
      ),
  },
  {
    path: 'past',
    loadChildren: () =>
      import('./pages/past-training/past-training.module').then(
        (m) => m.PastTrainingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
