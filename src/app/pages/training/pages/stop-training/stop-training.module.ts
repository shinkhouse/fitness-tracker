import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopTrainingComponent } from './stop-training.component';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';



@NgModule({
    declarations: [StopTrainingComponent],
    imports: [CommonModule, SharedModule],
    exports: [StopTrainingComponent],
})
export class StopTrainingModule {}
